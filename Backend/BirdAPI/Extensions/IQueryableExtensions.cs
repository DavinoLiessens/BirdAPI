using BirdAPI.BaseModels;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Reflection;

namespace BirdAPI.Extensions
{
    public static class IQueryableExtensions
    {
        /// <summary>
        /// Pages a query and maps the page with <paramref name="map"/>.
        /// Page 0/null means page 1; pageSize 0/null means "everything".
        /// The query should be ordered, otherwise the page content is undefined.
        /// </summary>
        public static async Task<PagedResponse<Y>> GetPaged<T, Y>(this IQueryable<T> query, int? page, int? pageSize, Func<T, Y> map)
            where T : class
            where Y : class
        {
            var totalAmount = await query.CountAsync();
            var currentPage = page.GetValueOrDefault() <= 0 ? 1 : page!.Value;
            var resultPageSize = pageSize.GetValueOrDefault() <= 0 ? totalAmount : pageSize!.Value;

            var pageQuery = query.Skip((currentPage - 1) * resultPageSize);
            if (resultPageSize != 0)
                pageQuery = pageQuery.Take(resultPageSize);

            var items = await pageQuery.ToListAsync();
            return new PagedResponse<Y>(items.Select(map).ToList(), currentPage, resultPageSize, totalAmount);
        }

        private static PropertyInfo GetPropertyInfo(Type type, string propertyName)
        {
            //***
            //*** Check if the property name is a complex nested type
            //***
            if (propertyName.Contains("."))
            {
                //***
                //*** Get the first property name of the complex type
                //***
                var tempPropertyName = propertyName.Split(".", 2);
                //***
                //*** Check if the property exists in the type
                //***
                var prop = GetPropertyInfo(type, tempPropertyName[0]);
                if (prop != null)
                {
                    //***
                    //*** Drill down to check if the nested property exists in the complex type
                    //***
                    return GetPropertyInfo(prop.PropertyType, tempPropertyName[1]);
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return type.GetProperty(propertyName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
            }
        }

        public static IOrderedQueryable<T> Sort<T>(this IQueryable<T> query, string propertyName)
        {
            // If sort contains "-" (ex: '-fullname') then order by desc
            var sort = propertyName.Contains("-");
            var sortColumn = sort ? propertyName.Split("-")[1] : propertyName;

            sortColumn = sortColumn.ToLower().Contains("addedon") ? "created" : sortColumn;

            var propExists = GetPropertyInfo(typeof(T), sortColumn) != null;
            if (!propExists)
            {
                // The items will stay in the same order they were initially.
                return query.OrderBy(x => 0);
            }

            return sort ? query.OrderByDescending(sortColumn) : query.OrderBy(sortColumn);
        }

        public static IOrderedQueryable<T> OrderBy<T>(this IQueryable<T> query, string propertyName)
        {
            return CallOrderedQueryable(query, "OrderBy", propertyName);
        }

        public static IOrderedQueryable<T> OrderByDescending<T>(this IQueryable<T> query, string propertyName)
        {
            return CallOrderedQueryable(query, "OrderByDescending", propertyName);
        }

        public static IOrderedQueryable<T> ThenBy<T>(this IOrderedQueryable<T> query, string propertyName)
        {
            return CallOrderedQueryable(query, "ThenBy", propertyName);
        }

        public static IOrderedQueryable<T> ThenByDescending<T>(this IOrderedQueryable<T> query, string propertyName)
        {
            return CallOrderedQueryable(query, "ThenByDescending", propertyName);
        }

        /// <summary>
        /// Builds the Queryable functions using a TSource property name.
        /// </summary>
        public static IOrderedQueryable<T> CallOrderedQueryable<T>(this IQueryable<T> query, string methodName, string propertyName)
        {
            var param = Expression.Parameter(typeof(T), "x");

            var body = propertyName.Split('.').Aggregate<string, Expression>(param, Expression.PropertyOrField);

            return (IOrderedQueryable<T>)query.Provider.CreateQuery(
                    Expression.Call(
                        typeof(Queryable),
                        methodName,
                        new[] { typeof(T), body.Type },
                        query.Expression,
                        Expression.Lambda(body, param)));
        }
    }
}

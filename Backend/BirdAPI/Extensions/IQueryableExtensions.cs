using AutoMapper;
using BirdAPI.BaseModels;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Reflection;

namespace BirdAPI.Extensions
{
    public static class IQueryableExtensions
    {
        public static async Task<PagedResponse<Y>> GetPaged<T, Y>(this IEnumerable<T> query, int? page, int? pageSize, IMapper mapper)
            where T : class
            where Y : class
        {
            var totalAmount = query.Count();
            int currentPage;
            int resultPageSize;

            if (page == null || page.Value == 0)
                currentPage = 1;
            else
                currentPage = page.GetValueOrDefault();

            if (pageSize == null || pageSize.Value == 0)
                resultPageSize = totalAmount;
            else
                resultPageSize = pageSize.GetValueOrDefault();

            var skip = (currentPage - 1) * resultPageSize;

            query = query.Skip(skip);
            if (resultPageSize != 0)
                query = query.Take(resultPageSize);

            var result = new PagedResponse<Y>
            (mapper.Map<List<Y>>(query.ToList()), currentPage, resultPageSize, totalAmount);

            return result;
        }
        public static async Task<PagedResponse<Z>> GetPaged<T, Y, Z>(this IEnumerable<T> query, int? page, int? pageSize, IMapper mapper)
            where T : class
            where Y : class, Z
        {
            var totalAmount = query.Count();
            int currentPage;
            int resultPageSize;

            if (page == null || page.Value == 0)
                currentPage = 1;
            else
                currentPage = page.GetValueOrDefault();

            if (pageSize == null || pageSize.Value == 0)
                resultPageSize = totalAmount;
            else
                resultPageSize = pageSize.GetValueOrDefault();

            var skip = (currentPage - 1) * resultPageSize;

            query = query.Skip(skip);
            if (resultPageSize != 0)
                query = query.Take(resultPageSize);

            var result = new PagedResponse<Z>
            (mapper.Map<List<Z>>((query.ToList()).OfType<Z>().ToList<Z>()), currentPage, resultPageSize, totalAmount);

            return result;
        }

        public static async Task<PagedResponse<Y>> GetPaged<T, Y>(this IQueryable<T> query, int? page, int? pageSize, IMapper mapper)
            where T : class
            where Y : class
        {
            var totalAmount = query.Count();
            int currentPage;
            int resultPageSize;

            if (page == null || page.Value == 0)
                currentPage = 1;
            else
                currentPage = page.GetValueOrDefault();

            if (pageSize == null || pageSize.Value == 0)
                resultPageSize = totalAmount;
            else
                resultPageSize = pageSize.GetValueOrDefault();

            var skip = (currentPage - 1) * resultPageSize;

            query = query.Skip(skip);
            if (resultPageSize != 0)
                query = query.Take(resultPageSize);

            var result = new PagedResponse<Y>
            (mapper.Map<List<Y>>(await query.ToListAsync()), currentPage, resultPageSize, totalAmount);

            return result;
        }

        public static async Task<PagedResponse<Z>> GetPaged<T, Y, Z>(this IQueryable<T> query, int? page, int? pageSize, IMapper mapper)
            where T : class
            where Y : class, Z
        {
            var totalAmount = query.Count();
            int currentPage;
            int resultPageSize;

            if (page == null || page.Value == 0)
                currentPage = 1;
            else
                currentPage = page.GetValueOrDefault();

            if (pageSize == null || pageSize.Value == 0)
                resultPageSize = totalAmount;
            else
                resultPageSize = pageSize.GetValueOrDefault();

            var skip = (currentPage - 1) * resultPageSize;

            query = query.Skip(skip);
            if (resultPageSize != 0)
                query = query.Take(resultPageSize);

            var result = new PagedResponse<Z>
            (mapper.Map<List<Z>>((await query.ToListAsync()).OfType<Z>().ToList<Z>()), currentPage, resultPageSize, totalAmount);

            return result;
        }

        public static async Task<PagedResponse<T>> GetPaged<T>(this IQueryable<T> query, int? page, int? pageSize) where T : class
        {
            var totalAmount = query.Count();
            int currentPage;
            int resultPageSize;

            if (page == null || page.Value == 0)
                currentPage = 1;
            else
                currentPage = page.GetValueOrDefault();

            if (pageSize == null || pageSize.Value == 0)
                resultPageSize = totalAmount;
            else
                resultPageSize = pageSize.GetValueOrDefault();

            var skip = (currentPage - 1) * resultPageSize;

            query = query.Skip(skip);
            if (resultPageSize != 0)
                query = query.Take(resultPageSize);

            var result = new PagedResponse<T>
           (await query.ToListAsync(), currentPage, resultPageSize, totalAmount);

            return result;
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

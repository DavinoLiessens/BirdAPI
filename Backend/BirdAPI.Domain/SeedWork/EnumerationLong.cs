﻿using System;
using System.Collections.Generic;
using System.Reflection;
using System.Linq;

namespace Wwsv.Domain.SeedWork
{
    public abstract class EnumerationLong : IComparable
    {
        public string Name { get; private set; }

        public long Id { get; private set; }

        protected EnumerationLong(long id, string name)
        {
            Id = id;
            Name = name;
        }

        public override string ToString() => Name;

        public static IEnumerable<T> GetAll<T>() where T : EnumerationLong
        {
            var fields = typeof(T).GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.DeclaredOnly);

            return fields.Select(f => f.GetValue(null)).Cast<T>();
        }

        public override bool Equals(object obj)
        {
            var otherValue = obj as EnumerationLong;

            if (otherValue == null)
                return false;

            var typeMatches = GetType().Equals(obj.GetType());
            var valueMatches = Id.Equals(otherValue.Id);

            return typeMatches && valueMatches;
        }

        public override int GetHashCode() => Id.GetHashCode();

        public static long AbsoluteDifference(EnumerationLong firstValue, EnumerationLong secondValue)
        {
            var absoluteDifference = Math.Abs(firstValue.Id - secondValue.Id);
            return absoluteDifference;
        }

        public static T FromValue<T>(long value) where T : EnumerationLong
        {
            var matchingItem = Parse<T, long>(value, "value", item => item.Id == value);
            return matchingItem;
        }

        public static T FromDisplayName<T>(string displayName) where T : EnumerationLong
        {
            var matchingItem = Parse<T, string>(displayName, "display name", item => item.Name == displayName);
            return matchingItem;
        }

        private static T Parse<T, K>(K value, string description, Func<T, bool> predicate) where T : EnumerationLong
        {
            var matchingItem = GetAll<T>().FirstOrDefault(predicate);

            if (matchingItem == null)
                throw new InvalidOperationException($"'{value}' is not a valid {description} in {typeof(T)}");

            return matchingItem;
        }

        public int CompareTo(object other) => Id.CompareTo(((EnumerationLong)other).Id);
    }
}

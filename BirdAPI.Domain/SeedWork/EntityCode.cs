using System;
using System.Collections.Generic;
using MediatR;

namespace Wwsv.Domain.SeedWork
{
    public abstract class EntityCode : ITrackableEntity
    {
        int? _requestedHashCode;
        string _Code;
        public virtual string Code
        {
            get
            {
                return _Code;
            }
            protected set
            {
                _Code = value;
            }
        }

        private List<INotification> _domainEvents;
        public IReadOnlyCollection<INotification> DomainEvents => _domainEvents?.AsReadOnly();

        public DateTime Created { get; private set; }
        public DateTime? Modified { get; private set; }

        public void IsCreated()
        {
            Created = DateTime.UtcNow;
        }

        public void IsModified()
        {
            Modified = DateTime.UtcNow;
        }

        public void AddDomainEvent(INotification eventItem)
        {
            _domainEvents = _domainEvents ?? new List<INotification>();
            _domainEvents.Add(eventItem);
        }

        public void RemoveDomainEvent(INotification eventItem)
        {
            _domainEvents?.Remove(eventItem);
        }

        public void ClearDomainEvents()
        {
            _domainEvents?.Clear();
        }

        public bool IsTransient()
        {
            return this.Code == default(string);
        }

        public override bool Equals(object obj)
        {
            if (obj == null || !(obj is EntityCode))
                return false;

            if (Object.ReferenceEquals(this, obj))
                return true;

            if (this.GetType() != obj.GetType())
                return false;

            EntityCode item = (EntityCode)obj;

            if (item.IsTransient() || this.IsTransient())
                return false;
            else
                return item.Code == this.Code;
        }

        public override int GetHashCode()
        {
            if (!IsTransient())
            {
                if (!_requestedHashCode.HasValue)
                    _requestedHashCode = this.Code.GetHashCode() ^ 31; // XOR for random distribution (http://blogs.msdn.com/b/ericlippert/archive/2011/02/28/guidelines-and-rules-for-gethashcode.aspx)

                return _requestedHashCode.Value;
            }
            else
                return base.GetHashCode();

        }
        public static bool operator ==(EntityCode left, EntityCode right)
        {
            if (Object.Equals(left, null))
                return (Object.Equals(right, null)) ? true : false;
            else
                return left.Equals(right);
        }

        public static bool operator !=(EntityCode left, EntityCode right)
        {
            return !(left == right);
        }
    }
}

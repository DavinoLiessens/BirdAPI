using System;
using System.Collections.Generic;
using System.Text;

namespace Wwsv.Domain.SeedWork
{
    public interface ITrackableEntity
    {
        DateTime Created { get; }
        DateTime? Modified { get; }
        void IsCreated();
        void IsModified();
    }
}

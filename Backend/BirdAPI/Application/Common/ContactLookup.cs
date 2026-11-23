using BirdAPI.Domain.AggregatesModel.ContactAggregate;
using BirdAPI.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Common
{
    public static class ContactLookup
    {
        /// <summary>The contact that represents the kwekerij of the logged-in user.</summary>
        public static Task<Contact?> GetSelfAsync(this BirdAPIContext context, CancellationToken cancellationToken = default) =>
            context.Contacts.FirstOrDefaultAsync(c => c.IsSelf, cancellationToken);

        /// <summary>The given contact, or the kwekerij itself when no id is given.</summary>
        public static Task<Contact?> GetContactOrSelfAsync(this BirdAPIContext context, int? contactId, CancellationToken cancellationToken = default) =>
            contactId is > 0
                ? context.Contacts.FirstOrDefaultAsync(c => c.Id == contactId, cancellationToken)
                : context.GetSelfAsync(cancellationToken);
    }
}

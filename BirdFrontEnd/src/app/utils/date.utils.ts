/**
 * Converts a date picked in the UI to a plain calendar date (yyyy-MM-dd) for the API.
 *
 * Sending a `Date` object directly serializes it as UTC: a local midnight in Belgium
 * becomes 22:00/23:00 on the previous day, which moved e.g. a bird born on 1 January
 * into the previous year. A plain date string has no time zone, so it stays the same day.
 */
export function toDateOnly(value: Date | string | null | undefined): string | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  const date = value instanceof Date ? value : new Date(value);
  if (isNaN(date.getTime())) {
    return null;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

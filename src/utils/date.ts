const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** Formats a date as YYYY-MM-DD (UTC). */
export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Whole days from `a` to `b` (negative if `b` is before `a`). */
export function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / MS_PER_DAY);
}

/** True if the date falls on a Saturday or Sunday (UTC). */
export function isWeekend(date: Date): boolean {
  const day = date.getUTCDay();
  return day === 0 || day === 6;
}

export const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const quantityDays: Record<string, Function> = {
  'January': () => 31,
  'February': (isLeap: boolean) => isLeap ? 29 : 28,
  'March': () => 31,
  'April': () => 30,
  'May': () => 31,
  'June': () => 30,
  'July': () => 31,
  'August': () => 31,
  'September': () => 30,
  'October': () => 31,
  'November': () => 30,
  'December': () => 31
}

export function getCalendarMonths(month: number, year: number) {
  if (month < 0 || year === 0) return [];

  const leapYear = isLeapYear(year);
  const m = getMonth(month);
  const quantity = quantityDays[m](leapYear);
  const firstDay = new Date(`${year+1}-${month < 9 ? `0${month+1}` : month+1}-01`);

  const days = Array(quantity)
    .fill(0)
    .map((v, i) => i+1);

    const emptyStart = Array(firstDay.getDay()).fill(0);
    const totalRows = Math.ceil((emptyStart.length + days.length) / 7);
    console.log(totalRows);
    const total = (7*totalRows) - (emptyStart.length + days.length);

    console.log(total);
    const emptyEnd = Array(total < 0 ? 0 : total).fill(0)

  return [...emptyStart, ...days, ...emptyEnd];
}

export function isLeapYear(year: number){
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true;

  return false;
}

export function isFirstMonthOfTheYear(monthDigit: number) {
  return monthDigit === 0;
}

export function isLastMonthOfTheYear(monthDigit: number) {
  return monthDigit === 11;
}

export function getMonth(monthDigit: number) {
  return months[monthDigit];
}

export function beforeMonth(monthDigit: number) {
  return monthDigit === 0 ? 11 : monthDigit-1;
}

export function afterMonth(monthDigit: number) {
  return monthDigit === 11 ? 0 : monthDigit+1;
}
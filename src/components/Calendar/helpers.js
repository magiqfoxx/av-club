export const addZero = number => {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

export const getDate = date =>
  `${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;

export const getTime = date => {
  const minutes =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${date.getHours()}:${minutes}`;
};
export function getDateToday() {
  const date = new Date();
  return [date.getMonth(), date.getDate(), date.getDay(), date.getFullYear()];
}

export function getMonthWord(month) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[month];
}

export function findFirstDayOfMonth(day, weekDay) {
  if (weekDay - (day % 7) < -1) {
    return weekDay - (day % 7) + 8;
  } else {
    return weekDay - (day % 7) + 1;
  }
}

export function getMonthLength(month, year) {
  const M30Days = [1, 3, 5, 7, 8, 10, 12];
  let monthLength;

  if (month === 1) {
    //Feb
    if (year % 4 !== 0) {
      monthLength = 28;
    } else {
      monthLength = 29;
    }
  } else if (M30Days.includes(month)) {
    monthLength = 30;
  } else {
    monthLength = 31;
  }
  return monthLength;
}

export function getWeeks(month, day, weekDay, year) {
  /*returns an array of arrays where 
    0: [days by week]
    1: last day of last month 
    and 2: first day of next month 
    */

  let maxDays = [...Array(32).keys()].slice(1); //array of days of 1->31

  //let weeks = [];
  let days;
  let LDLM = [];
  let FDNM = [];

  /*if (getMonthLength(month, year) === 28) {
      days = maxDays.slice(0, 28);
      weeks = sliceMonthToWeeks(days);
    } else {*/
  //weekDay of first day this month
  //MONDAY IS 1!!!!!!!! (Sun is 0. Americans....)
  let firstDay = findFirstDayOfMonth(day, weekDay);

  //array of days this month
  days = maxDays.slice(0, getMonthLength(month, year));

  //previous month
  let prevM = month > 0 ? month - 1 : 11;
  let previousMLength = getMonthLength(prevM, year);

  let prevMDays = maxDays.slice(0, previousMLength);

  //getting last day of last month
  //LDLM = [date,weekDay]
  LDLM.push(previousMLength); //date
  LDLM.push(firstDay > 0 ? firstDay - 1 : 6); //weekday

  //getting first day next month
  //FDNM = [date, weekday]
  FDNM.push(1); //date
  FDNM.push(
    firstDay + (getMonthLength(month, year) % 7) < 7
      ? firstDay + (getMonthLength(month, year) % 7)
      : firstDay + (getMonthLength(month, year) % 7) - 7
  ); //weekday

  //add days from prev month
  let prevMFewDays = prevMDays.slice(prevMDays.length - firstDay + 1);

  //days = [...prevMFewDays, ...days];

  //add days from next month
  let daysNextM = maxDays.slice(
    0,
    35 - days.length >= 0 ? 35 - days.length : 42 - days.length
  );

  //days = [...days, ...daysNextM];

  return [prevMFewDays, days, daysNextM, LDLM, FDNM];

  //}
  //return [weeks, LDLM, FDNM];
}

export function numberOfWeeks(month, year) {
  return Math.ceil(getMonthLength(month, year) / 7);
}

export function getDaysOfTheWeek() {
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
}

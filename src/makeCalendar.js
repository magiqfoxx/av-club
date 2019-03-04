const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const weekDay = date.getDay();

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
  } else if (month in M30Days) {
    monthLength = 30;
  } else {
    monthLength = 31;
  }
  return monthLength;
}

export function getWeeks() {
  let weeks = [];
  let days;

  function sliceMonthToWeeks(days) {
    let month = [];
    let weeks = Math.ceil(days.length / 7);
    let thisWeek;

    for (let i = 0; i < weeks; i++) {
      thisWeek = days.slice(7 * i, (i + 1) * 7);
      month.push(thisWeek);
    }
    return month;
  }

  if (numberOfWeeks() === 4) {
    days = [...Array(28).keys()];
    weeks = sliceMonthToWeeks(days);
    return weeks;
  } else {
    //
    let firstDay = findFirstDayOfMonth(day, weekDay);

    days = [...Array(getMonthLength(month, year)).keys()];
    let prevM = month > 0 ? month - 1 : 12;
    let previousMLength = getMonthLength(prevM, year);
    let prevMDays = [...Array(previousMLength).keys()];

    //add days from prev month
    let prevMFewDays = prevMDays.slice(-firstDay);
    days = [...prevMFewDays, ...days];

    //add days from next month
    let daysNextM = [...Array(35 - days.length).keys()];
    days = [...days, ...daysNextM];

    weeks = sliceMonthToWeeks(days);
  }
  console.log(weeks);
  return weeks;
}

export function numberOfWeeks() {
  return Math.ceil(getMonthLength % 7);
}

export function daysOfTheWeek() {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
}
export function getMonthWord() {
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
export function getMonth() {
  return month;
}

export function getDate() {
  return [getMonthLength(), findFirstDayOfMonth()];
}

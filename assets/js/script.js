var date = dayjs().format('M/DD/YYYY');
var dateTxtEl = document.querySelector('#date');

var day1Date = dayjs().add(1, 'day').format('M/DD/YYYY');
var day2Date = dayjs().add(2, 'day').format('M/DD/YYYY');
var day3Date = dayjs().add(3, 'day').format('M/DD/YYYY');
var day4Date = dayjs().add(4, 'day').format('M/DD/YYYY');
var day5Date = dayjs().add(5, 'day').format('M/DD/YYYY');

var day1DateEl = document.querySelector('#day-1-date');
var day2DateEl = document.querySelector('#day-2-date');
var day3DateEl = document.querySelector('#day-3-date');
var day4DateEl = document.querySelector('#day-4-date');
var day5DateEl = document.querySelector('#day-5-date');

dateTxtEl.textContent = date;
day1DateEl.textContent = day1Date;
day2DateEl.textContent = day2Date;
day3DateEl.textContent = day3Date;
day4DateEl.textContent = day4Date;
day5DateEl.textContent = day5Date;

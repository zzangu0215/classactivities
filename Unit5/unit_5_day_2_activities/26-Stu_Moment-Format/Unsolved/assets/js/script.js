// Use Moment.js to format the date and assign to the declared variable. TODO:
// 1. What is your graduation date in the following format: Jan 1st, 1999?
// (Graduation is on August 30th)
var gradDate = moment('06/13/2021', 'MM/DD/YYYY');
$('#1a').text(gradDate.format('MMM Do, YYYY'));

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment('2022-01-01').format('[The day of 01/01/2022 is] dddd');
$('#2a').text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var now = moment().format('DDDo');
$('#3a').text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format('h:mm:ss a');
$('#4a').text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format('X');
$('#5a').text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876).format('MMM Do, YYYY, hh:mm:ss');
$('#6a').text(unixFormat);

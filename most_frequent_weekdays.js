/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Example:

mostFrequentDays(2427) => ['Friday']
mostFrequentDays(2185) => ['Saturday']
mostFrequentDays(2860) => ['Thursday', 'Friday']
*/

//my solution
function mostFrequentDays(year){
  let days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }

  const janFirst = new Date('January 1, ' + year + ' 01:00:00');
  const decLast = new Date('December 31 ' + year + ' 01:00:00');
  const firstDay = days[ janFirst.getDay() ];
  const lastDay =  days[ decLast.getDay() ];

  if (firstDay === lastDay) {
    return [firstDay];
  } else if (firstDay != lastDay && firstDay === 'Sunday'){
    return [lastDay, firstDay]
  } else {
    return [firstDay, lastDay]
  };
}

//otherSolutions

function mostFrequentDays(year) {
  var days = [
    new Date(year, 0, 1).getDay(),
    new Date(year, 11, 31).getDay()
  ];

  if (days[0] === days[1])
    days.pop();

  else if (!days[0] || days[0] > days[1] && days[1])
    days.reverse();

  return days.map(n => ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'][n] + 'day');
}

//or

function mostFrequentDays(year){
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const leap = new Date(year, 1, 29).getMonth() === 1;
  const frequent = (new Date(year, 0, 1).getDay() + 6) % 7;
  return (leap ? [frequent, (frequent + 1) % 7].sort() : [frequent]).map((day) => days[day]);
}

//or

function mostFrequentDays(year){
  var d = (new Date(year,0,1)).getDay();
  var arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].slice(d, (!(year%400) || (!(year%4) && !!(year%100)) ? d+2 : d+1));
  return !d ? arr.reverse() : arr;
}

//or

mostFrequentDays=(y,d=new Date(y,0,1).getDay())=>(!(y%4)&!!(y%100)|!(y%400)?d?[d++,d%7]:[1,0]:[d]).map(v=>'Sun Mon Tues Wednes Thurs Fri Satur'.split` `[v]+'day')

import DateClass from './class/dateClass';

console.log('===> Date 1:');
const date1 = new DateClass(2020, 1, 1);
console.log('Date [1]: ', date1);
console.log('Month [1]: ', date1.getMonthName());
console.log('Is it leap year: [1]: ', date1.isLeapYear());

console.log('===> Date 2:');
const date2 = new DateClass(1980, 7, 23);
console.log('Date [2]: ', date2);
console.log('Month [2]: ', date2.getMonthName());
console.log('Is it leap year: [2]: ', date2.isLeapYear());

console.log('--> Compare Date2 - Date1:');
console.log('Date2 > Date1: ', date2.compare(date1));
date1.month = 2;
date1.day = 29;

console.log('===> Date 3:');
const date3 = new DateClass(1997, 2, 31);
console.log('Date [3]: ', date3);
console.log('Month [3]: ', date3.getMonthName());
console.log('Is it leap year: [3]: ', date3.isLeapYear());
console.log('--> Compare Date3 - Date1:');
console.log('Date3 > Date1: ', date3.compare(date1));

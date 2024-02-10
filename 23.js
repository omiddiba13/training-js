// جلسه 28 js 
// s
//  array Destructuring 
//
//  const person = { firstName:"ali" , lastName:"d"};
//  const {firstName}=person
//  console.log(firstName);
// const foo = ["one", "two", "three"]; 
 
// const [red, yellow, green] = foo; 
// console.log(red); // "one" 
// console.log(yellow); // "two" 
// console.log(green); // "three"  ;
// ahmyat index dar array ha // 
// const foo = ["one", "two"]; 
 
// const [red, yellow, green, blue] = foo; 
// console.log(red); // "one" 
// console.log(yellow); // "two" 
// console.log(green); // undefined 
// console.log(blue); // undefined 

// function f() { 
//     return [1, 2]; 
//   } 
   
//   const [a, b] = f(); 
//   console.log(a); // 1 
//   console.log(b); // 2  
// let a = 1; 
// let b = 3; 
 
// [a, b] = [b, a]; 
// console.log(a); // 3 
// console.log(b); // 1 
// built-in object 
// date 
// const date1 = new Date();
// const date2 = new Date(100000000000); //  Date(milliseconds) 
// const date3 = new Date("2020-01-22"); //  Date(dateString) 
// const date4 = new Date(2023, 10, 25, 11, 3, 11, 990); //    Date(year, month, day, hours, minutes, seconds, 
// console.log(date1); 
// console.log(date2); 
// console.log(date3); 
// console.log(date4);

// const date = new Date(2024, 1, 10,10,30,30 ); //      Date(year, month, day, hours, minutes, seconds, 
// console.log(date)
// console.log(date.getDate()); // Returns the day of the month (from 1-31). => 25 
// console.log(date.getDay()); // Returns the day of the week (from 0-6). => 6 
// console.log(date.getFullYear()); // Returns the year (four digits). => 2023 
// console.log(date.getHours()); // Returns the hour (from 0-23). => 11 
// console.log(date.getMilliseconds()); // Returns the milliseconds (from 0-999). => 990 
// console.log(date.getMinutes()); // Returns the minutes (from 0-59). => 3 
// console.log(date.getMonth()); // Returns the month (from 0-11). => 10 
// console.log(date.getSeconds()); // Returns the seconds (from 0-59). => 11 
// console.log(date.getTime()); // Returns the number of milliseconds since midnight Jan 1, 1970. => 1700899391990 
// console.log(date.getTimezoneOffset()); // Returns the time difference between UTC time and local time, in  
// console.log(date.getUTCDate()); // Returns the day of the month, according to universal time (from 1-31). => 25 
// console.log(date.getUTCDay()); // Returns the day of the week, according to universal time (from 0-6). => 6 
// console.log(date.getUTCFullYear()); // Returns the year, according to universal time (four digits). => 2023 
// console.log(date.getUTCHours()); // Returns the hour, according to universal time (from 0-23). => 8 
// console.log(date.getUTCMilliseconds()); // Returns the milliseconds, according to universal time (from 0-999). 
// console.log(date.getUTCMinutes()); // Returns the minutes, according to universal time (from 0-59). => 3 
// console.log(date.getUTCMonth()); // Returns the month, according to universal time (from 0-11). => 10 
// console.log(date.getUTCSeconds()); // Returns the seconds, according to universal time (from 0-59). => 11 bb


// const date = new Date(2023, 10, 25, 11, 3, 11, 990); //     Date(year, month, day, hours, minutes, seconds 
// date.setDate(5); // Sets the day of the month of a date object. 
// console.log(date); // => 2023-11-05T08:03:11.990Z 
// date.setFullYear(2000); // Sets the year (four digits) of a date object. 
// console.log(date); // => 2000-11-05T09:03:11.990Z 
// date.setHours(0); // Sets the hour of a date object. 
// console.log(date); // => 2000-11-04T22:03:11.990Z 
// date.setMilliseconds(500); // Sets the milliseconds of a date object. 
// console.log(date); // => 2000-11-04T22:03:11.500Z 
// date.setMinutes(30); // Set the minutes of a date object. 
// console.log(date); // => 2000-11-04T22:30:11.500Z 
// date.setMonth(0); // Sets the month of a date object. 
// console.log(date); // => 2000-01-04T22:30:11.500Z 
// date.setSeconds(33); // Sets the seconds of a date object. 
// console.log(date); // => 2000-01-04T22:30:33.500Z 
// date.setTime(1000000000000); // Sets a date and time by adding or subtracting a specified number of milliseconds 
// // to/from midnight January 1, 1970. 
// console.log(date); // => 2001-09-09T01:46:40.000Z 
// console.log(date.toDateString()); // => Sun Sep 09 2001 
// // Converts the date portion of a Date object into a readable string. 
// console.log(date.toISOString()); // => 2001-09-09T10:46:40.000Z 
// // Returns the date as a string, using the ISO standard. 
// console.log(date.toJSON()); // => 2001-09-09T10:46:40.000Z 
// // Returns the date as a string, formatted as a JSON date. 
// console.log(date.toLocaleDateString()); // => 9/9/2001 
// // Returns the date portion of a Date object as a string, using locale conventions. 
// console.log(date.toLocaleTimeString()); // => 1:46:40 PM 
// // Returns the time portion of a Date object as a string, using locale conventions. 
// console.log(date.toLocaleString()); // => 9/9/2001, 1:46:40 PM 
// // Converts a Date object to a string, using locale conventions. 
// console.log(date.toString()); // => Sun Sep 09 2001 13:46:40 GMT+0300 (GMT+03:00) 
// // Converts a Date object to a string. 
// console.log(date.toTimeString()); // => 13:46:40 GMT+0300 (GMT+03:00) 
// // Convert the time portion of a Date object to a string. 
// console.log(date.toUTCString()); // => Sun, 09 Sep 2001 10:46:40 GMT 
// // Converts a Date object to a string, according to universal time. 
// console.log(date.valueOf()); // => 1000032400000 
// // Returns the primitive value of a Date object. 

// // math 
// console.log(Math.abs(-3.3)); // 3.3 
// console.log(Math.sqrt(16)); // 4 
// console.log(Math.cbrt(8)); // 2 
// console.log(Math.sin(Math.PI)); // 1.2246467991473532e-16 
// console.log(Math.sin(Math.PI / 2)); // 1 
// console.log(Math.sin(Math.PI / 4)); // 0.7071067811865475 
// console.log(Math.sin((30 * Math.PI) / 180)); // 0.49999999999999994 
// console.log(Math.acos(1)); // 0 
// console.log(Math.ceil(2.2)); // 3 
// console.log(Math.ceil(-2.2)); // -2 
// console.log(Math.floor(2.2)); // 2 
// console.log(Math.floor(-2.2)); // -3 
// console.log(Math.trunc(2.2)); // 2 
// console.log(Math.trunc(-2.2)); // -2 
// console.log(Math.random()); // 0.3413998009793533 
// console.log(Math.random()); // 0.05304767685978917 
// console.log(Math.hypot(1, 2, 5, 4)); // 6.782329983125269 
// console.log(Math.clz32(30)); // 27 
// console.log(Math.pow(2, 10)); // 1024 
// console.log(Math.min(2, 10, -3, 11)); // -3 
// console.log(Math.max(2, 10, -3, 11)); // 11 

//////////// json 
// const jsonData = '{ "firstName": "Ali", "lasName": "Alavi" ,"birthDate":"2009-09-21" } ';
// const obj = JSON.parse(jsonData);
// console.log(obj.firstName); //{ firstName: 'Ali', lasName: 'Alavi', birthDate: '2009-09-21' }

2.
// const jsonData = '{ "firstName": "Ali", "lasName": "Alavi" ,"birthDate":"2009-09-21" } ';

// const obj = JSON.parse(jsonData)
// ;
// const { birthDate} = obj;
// const birthDateObj= new Date(birthDate);
// const currentDate= new Date();
// console.log(currentDate.getFullYear);
// const age = currentDate.getFullYear() - birthDateObj.getFullYear()
// console.log(age);
//reverse json 
3.
// const obj = { firstName: "Ali", lasName: "Alavi", birthDate: "2009-09-21" }; 
// const json = JSON.stringify(obj);
// console.log(json);
4.

// const obj = { firstName: "Ali", lasName: "Alavi", birthDate: "2009-09-21" };
// const json = JSON.stringify(obj, ["firstName", "lasName"]);
// console.log(json); // {"firstName":"Ali","lasName":"Alavi"}

5. 
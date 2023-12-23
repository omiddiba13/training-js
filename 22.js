// const numbers = [3, 4];
// console.log(numbers.push(5, 6), numbers); // add to end ---> 4 [ 3, 4, 5, 6 ]
// console.log(numbers.unshift(1, 2), numbers); // add to start ---> 6 [ 1, 2, 3, 4, 5, 6 ]
// numbers.splice(2, 0, "a", "b"); // add to middle
// console.log(numbers); //[ 1, 2, 'a', 'b',3, 4, 5, 6 ] 
// // namber = [];
// 2. 
// let numbers = [1, 2, 3, 4, 5, 6];
// let numbers2 = numbers;
// numbers = [];
// console.log(numbers); // []
// console.log(numbers2); // [ 1, 2, 3, 4, 5, 6 ]
3.
//  let numbers =[ 1,2,3,4,5,6,7]
//  console.log(numbers.indexOf(1));
//  console.log(numbers.indexOf(7));
//  console.log(numbers.lastIndexOf(1));
//  console.log(numbers.lastIndexOf(7));
//  console.log(numbers.includes(1));
4.
// let numbers = [1,2,3,4,5,6,7]
// ;
// let numbers2= numbers.filter((num) => num > 3)
// ;console.log(numbers2);
// console.log(numbers); 
5.
// let numbers = [1, 2, 3, 4, 5, 6, 1];
// let numbers2 =numbers.find((num)=>num>3)

// ;
// console.log(numbers2); // 4
// console.log(numbers); 
6.
// const persons = [
//     {
//       id: 1,
//       firstName: "Chrysa",
//       lastName: "Rubinfeld",
//     },
//     {
//       id: 2,
//       firstName: "Astrix",
//       lastName: "Denisovo",
//     },
//     {
//       id: 3,
//       firstName: "Rockie",
//       lastName: "Sambeck",
//     },
//     {
//       id: 4,
//       firstName: "Loreen",
//       lastName: "Crepel",
//     },
//     {
//       id: 5,
//       firstName: "Whitby",
//       lastName: "Batham",
//     },
//   ];
  
//   let targetIndex = persons.findIndex((person) => person.id === 3);
//   persons.splice(2, 1);
  
//   console.log(persons); //
7.
// const number = [ 1,2,3]
// ;
// const number2= [4,5,6];
// const combined= number.concat(number2);
// console.log(combined);
8.
// const number = [ 1,2,3]
// ;
// const number2= [4,5,6];
// const combined=[0,...number,...number2,7,8];
// console.log(combined);
9.
// const numbers =[ 1,2,3,4,5,6,7,8];
// const numbersCopy=numbers.slice(0,numbers.length); 
// const numbersCopy2=[...numbers] ;
// console.log(numbersCopy);
// console.log(numbersCopy)
10.
//  let person=[ 
//     { 
//         id:1 , fullname:"omid Diba"
//     },
//     {
//         id:2 , fullname:"ali alvani"
//     }
// ]
// let person2= [...person]
// ;
// person2[0].fullname="armita";
// console.log(person);
// console.log(person2);
11.

// let person=[ 
//     { 
//         id:1 , fullname:"omid Diba"
//     },
//     {
//         id:2 , fullname:"ali alvani"
//     }
// ]
// let person2 = structuredClone(person)
// ;
// person2 [0].fullname="arimta";
// console.log(person);
// console.log(person2);
12.
// loop 
// for .. in 
// for each
// let chars =[ "a", "b" , "c"];
// for (item in chars){ 
//     console.log(itme, chars[itme])
// }
 13.

// let numbers = [1,2,3,4]; 
// for (nus of numbers){
//     console.log(nus);
// }
14.
//  let numbers =[1,2,3,4,5];
//  numbers.forEach((value,index)=>{ 
//     console.log(value,index)
//  });
//  let numbers =[1,2,3,4,5];
//  let numbersStr1=numbers.toString();
//  let numberStr2=numbers.join("-");
//  let numbersStr3=numbers.join("");
//  console.log(numbers);
//  console.log(numbersStr1);
//  console.log(numberStr2);
//  console.log(numbersStr3);
15.
// let number =[ 5,6,4,3,2,1]
// ;
//  console.log(number.sort());
// //  console.log(number.tosorted());
//  console.log(number);

/// sort( ) همه چیز رو تبدیل به sting می کنه 
// مثال 
// let number = [ 1,200,100,4,6,5,500];
// console.log(number.sort() );
// // baraye hale in moshkel batad cho kar konim 
// //
//  console.log(number.sort( (a,b )=>a-b ))
//  // ye or
//  console.log(number.sort((a,b)=>b-a));
 16.
 // need object 
//  let employees = [
//     {
//       firstName: "John",
//       lastName: "Doe",
//       age: 27,
//       joinedDate: "December 15, 2017",
//     },
  
//     {
//       firstName: "Ana",
//       lastName: "Rosy",
//       age: 25,
//       joinedDate: "January 15, 2019",
//     },
  
//     {
//       firstName: "Zion",
//       lastName: "Albert",
//       age: 30,
//       joinedDate: "February 15, 2011",
//     },
//   ];

// // employees.sort( (a,b ) => a.age - b.age);
// // console.log(employees)
// // ;
// let sortedEmployee = employees.toSorted((a,b )=>a.age - b.age );
// console.log(sortedEmployee);
17.
// let employees = [
//     {
//       firstName: "John",
//       lastName: "Doe",
//       age: 27,
//       joinedDate: "December 15, 2017",
//     },
  
//     {
//       firstName: "Ana",
//       lastName: "Rosy",
//       age: 25,
//       joinedDate: "January 15, 2019",
//     },
  
//     {
//       firstName: "Zion",
//       lastName: "Albert",
//       age: 30,
//       joinedDate: "February 15, 2011",
//     },
//   ];

//   employees.sort((a,b)=> (a.firstName.toLowerCase()>b.firstName.toLowerCase()?1:-1) );
// //   console.log(employees.reverse())
//   console.log(employees);
//   console.log(employees.toReversed());
//   console.log(employees.toSorted());
18.
 
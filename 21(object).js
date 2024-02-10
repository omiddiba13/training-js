// objects // 
//1//
// let radius=1;

// let x=1;
// let y=1; 
//  console.log(x ) 
2.
// const person = { 
//     firstName:" omdi",
//     lastName: "diba",

// };
// const {firstName, lastName}=person 
// console.log(firstName,lastName);
3. 
// const person={ 
//     firstName:":)"
//     , lastName:":("
// };
// person.firstName="-_-";
// person.age=22;
// person.talk=function()
// { console.log("talk")

// };
// delete person.lastName;
// console.log(person)
4.
// function person (fname, lName){
//     this.firstname=fname
//     this.lastname=lName
// }
// const person1 = new person ("ali" ,"alavi")
// const person2 = new person ("ali222","a22lavi")


// console.log(person1,person2);
5.
// const person1 =new Object();
// person1.fName="omid"
// person1.lName="diba"
// console.log(person1);
6.
// const person1 ={ 
//     firstName:"omid"
//     ,
//     lastName:"diba"

// };
// const person2 =Object.create(person1);

// const person3 = Object.create(person1,{age:{ value: 30}});
// const person4 = Object.create(person1, {
//     firstName: { value: "Arash" },
//     age: { value: 30 },
//   });
// console.log(person1,person2,person3,person4.age )

7.
// let person1 ={ 
//     firstName:"s",
//      lastName:" d"

// }
// let person2 = person1 
// person1.firstName="aaa"
// ; 
// console.log(person2.firstName)
8.
// const person1 = {
//     firstName: "Ali",
//     lastName: "Alavi",
//   };
//   const person2 = Object.assign({}, person1 )
//   person2.firstName="aaaa"
//   console.log(person1 ,person2 )
9./////nmidonm chye//44444444444
// const person={ 
//     firstName:" dd"
//     ,lastName:"vv"
//     ,talk:function()
//     {
//         console.log("talk");
//     },
// }
// for( let x in person){ 
//     console.log(x, person[x]);
// }
10.
// const person ={ 
//     firstName:"ali", 
//     lastname:" aaa"
//     ,
//     talk:function( )
//     {
//         console.log("talk")
//     }


// }
// console.log(Object.keys(person));
// for (let key of Object.keys(person)){
//     console.log(key, person[key]);
// } 
// console.log("firstName"in person);
// console.log("age"in person);
11.
//  const circle ={ radius:1,draw:function( )
// { 
//     console.log("draw")
// }}
// const circle2={};
// for (let key in circle )
// { 
//     circle2[key]=circle[key];
// }
// const circle3 = Object.assign( { color:"red"}, circle)
// const circle4 = { ...circle };
// console.log(circle2, circle3, circle4);
12.
// const circle = { 
//     raidus:1 
//     ,
//     location:{ x:100 , y:100}
// }
// const circle3=
//     structuredClone(circle);

// const circle4=
//     structuredClone(circle);
// circle.raidus=4;
// circle3.location.x=200;
// circle4.location.y=200;
// console.log(circle, circle3, circle4);
13.
// console.log(1);
// console.log("first");
// console.log(true);
// const num11=10;
// let num22;
// console.log(num11<20);
// console.log(num11<20?"hi":"bye");
14.
// const colors1 = ["red", "green", "blue"];
// const colors2 = Array.of("red","black","blue");
// const colors3 = new Array("red", "green", "blue");
// const colors4 = "red green blue".split(" ") ;
// console.log(colors1, colors2, colors3, colors4);


// test 
function talk() {} 
function walk() {} 
const person = { 
    firstName: "Ali", 
    lastName: "Alavi", 
    talk: function () { 
      console.log("talk"); 
    }, 
    walk: function () { 
      console.log("walk"); 
    }, 
  }; 
import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

// function add(x,y){
//   return x+y;
// }

// const add = (x,y)=>x+y; // In Line

// function printAll(){
//   console.log('arguments',arguments);
//   let str='';
//   for(let i=0;i<arguments.length;i++){
//     str += arguments[i]+' / ';
//     console.log(arguments[i]);
//   }
//   return str;
// }

// const f=(
//   function printAll(){
//     return 'Ebrahim'
//   }
// )();

// function greeting(){
//   let message = 'Hello';
//   let sayHi = function hi(){
//      let message = 'hi';
//     //console.log(message);
//   }
//   sayHi();
//   console.log(message);
// }

// function greeting(firstName='Ebrahim'){
//   return 'Hello '+firstName;
// }

// const greeting={
//   firstName:'Ebrahim',
//   sayHi:function(){
//     console.log(this.firstName);
//   }
// }

// function setupCounter(val){

//   return function counter(){
//     return val++;
//   }
// }
// let setupCounter1 = setupCounter(10);
// console.log(setupCounter1());
// console.log(setupCounter1());
// console.log(setupCounter1());
// console.log(setupCounter1());

// const person = {firstName:'Ebrahim',lastName:'Salehi'}
// function sayHi(){
//   console.log(this.firstName,this.lastName);
// }

// sayHi.bind(person)()

//const list = [1,2,3,4,5];
const customerList = [
  {
    id:1,
    name:'Ebrahim',
    phoneNumber:9131769269,
    address:'Isfahan',
    rank:5,
  },
  {
    id:2,
    name:'Ramin',
    phoneNumber:9139081234,
    address:'Tehran',
    rank:4,
  },
  {
    id:3,
    name:'Reza',
    phoneNumber:9107189012,
    address:'Shiraz',
    rank:2,
  },
];

const result = customerList.reduce((sum,item)=>item.rank+sum,0);
console.log(result);

// console.log(customerList.filter(item=>item.rank<5));
// function getList(){
//   let str=''

  // for(let i=0;i<customerList.length;i++){
  //   str += customerList[i].rank+'  ';
  // }

  // for(let customer of customerList){
  //   str += customer.name+'  ';
  // }

  // customerList.forEach(item=>{
  //   str+=item.name+" ";
  // })

//   return str;
// }

function App() {
  
  const firstName = "Ebrahim";
  // const lastName="Salehi";
  // let salary=2000;
  // salary=salary+1000;
  // var year=1400;
  // year=year+1;

  // {
  //   let salary=2000;
  //   console.log('internal',salary);
  // }

  // console.log(typeof firstName,typeof salary);

//  let a='Ebrahim';
//  console.log(typeof(a));
//  a=3000;
//  console.log(typeof(a));
//  a=true;
//  console.log(typeof(a));
//  a=null;
//  console.log(typeof(a));
//  a=undefined;
//  console.log(typeof(a));

//console.log(score);

 /*
 Number
 String
 Boolean
 null
 undefined
 */ 




  return (
    <div className="App">
      {/* {printAll('Ebrahim','Salehi',4000,'0913-176-9269')} */}
      {/* {(
  function printAll(){
    return 'Ebrahim'
  }
)()} */}
{/* {
  greeting()
} */}
{/* {
  greeting.sayHi()
} */}
{/* {
  setupCounter1()
} */}
{/* {getList()} */}
{/* {
  customerList.map(item=><div>{item.name}</div>)
} */}
{/* {
  customerList.filter(item=>item.rank<3)
  .map(item=><div>{item.name}</div>)
} */}
{/* {customerList.reduce((sum,item)=>item.rank+sum,0)} */}
    <h1 className='HelloWorld'>Hello Worlds !!!</h1>
    </div>
  );
}

export default App;

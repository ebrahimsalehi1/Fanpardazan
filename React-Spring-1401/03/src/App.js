import logo from './logo.svg';
import './App.css';
import React from 'react';
import Products from './Products';

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

// function multiply(pcn,...numbers){
//   console.log(Array.isArray(numbers));
//   let res=pcn;
//   numbers.forEach(item=>{
//     res *= item;
//   })
//   return res;
// }

// const a=[1,2,3,4]
// const b=[10,20,30,40]

// const c=[...a,...b];
/*
const p = new Promise((resolve,reject)=>{
  // do anything
  console.log('promise');
  resolve('Ok');

  reject('Cancel');
})

p.then(res=>{
  console.log('response',res);
})
.catch(err=>{
  console.log(err);
})
*/

// function getData(){
//   fetch('https://fakestoreapi.com/products')
//   .then(res=>res.json())
//   .then(response=>{
//     console.log(response);
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// }

// async function getData2(){
//   const data = await fetch('https://fakestoreapi.com/products')
//                 .then(res=>res.json())
  
//   console.log(data);
//   return data;
// }

/*
class Person{
  constructor(firstName,salary){
    this.firstName = firstName;
    this.salary=salary
  }

  get fname(){return this.firstName;}
  set fname(firstName){this.firstName = firstName}

  printName(){
    console.log('printName',this.firstName);
  }
}

class Employee extends Person{
    constructor(fname,sal){
      super(fname,sal);

    }

    printEmployee=()=>{
      console.log('Employee',{firstName:this.firstName,salary:this.salary});
    }
}
*/

const productData = undefined;

function App() {

  // const set1=new Set([1,2,3,4])
  // set1.add(5)
  // set1.add(6)

  // set1.entries()
  // const mydata = getData2()

  // const e = new Employee('Ebrahim',1000);
  //p.firstName='Ebrahim';
  // e.printEmployee();

  return (
    <div className="App">
     <h1>Session 3</h1>
     {
      //  multiply(0.1,1,2,3,4,5,6,7,8,9,10)
     }
     {/* {
       c.map(item=><div>{item}</div>)
     } */}
     {/* MAX=
     {
       Math.max(10,20,30,...c)
     } */}
     {/* {mydata.length>0 && 
       mydata.map(item=><div>{item.id}</div>)
     } */}

     <Products  type='diary' list={productData}/>
    </div>
  );
}

export default App;

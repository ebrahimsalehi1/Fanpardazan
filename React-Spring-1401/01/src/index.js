import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
const name='Ebrahim';
function f1(){
  return 'function:'+name;
}
//const element = <h1>Hello, world! {f1()} </h1>;

const element = (<div>
  <h1>My Website</h1>
  <p>This is sample</p>
  <span>{f1()}</span>
</div>)

const rootElement = document.getElementById("root");
ReactDOM.render(
 
    element
 ,
  rootElement
);

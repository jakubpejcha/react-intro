// Expressions
import React from "react";
import ReactDOM from "react-dom";

const fName = "Jakub";
const lName = "Pejcha";

// Template litterals plus (within) JSX js insertion
ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>A random number: {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

// Excercise
/*
const name = "Jakub Pejcha";
const curDate = new Date();

ReactDOM.render(
  <div>
    <p>Created by: {name}</p>
    <p>Copyright: {curDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
*/

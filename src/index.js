import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Declarative vs imperative
/*
// declarative
let isDone = true;
const lineThrough = {textDecoration: 'line-through'}

ReactDOM.render(
  <p style={isDone ? lineThrough : null}>Buy milk</p>,
  document.getElementById("root"),
);

// imperative
function strike() {
  document.getElementById('item').style.textDecoration = 'line-through';
}

ReactDOM.render(
  <div>
    <p id="item">Buy milk</p>,
    <button onClick={strike}>Strike through!</button>
  </div>,
  document.getElementById("root"),
);
*/

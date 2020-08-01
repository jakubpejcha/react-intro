import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

// not class, but className
ReactDOM.render(
  <div>
    <h1 className="heading_SJSX">My Photos</h1>
    <h2 style={{ color: "red" }}>Random</h2>
    <h2 style={customStyle}>and Taken</h2>
    <div>
      <img src={img} alt="random" />
      <img
        className="my-image_SJSX"
        src="https://probella.com/wp-content/uploads/2018/03/React-JS.png"
        alt="react"
      />
    </div>
  </div>,
  document.getElementById("root")
);

//excercise

const today = new Date();
const timeHours = today.getHours();

let text;
const style = {
  color: "red"
};

if (timeHours < 12) {
  text = "Good morning";
  style.color = "red";
} else if (timeHours < 18) {
  text = "Good afternoon";
  style.color = "green";
} else {
  text = "Good evening";
  style.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading_exc" style={style}>
      {text}
    </h1>
  </div>,
  document.getElementById("root")
);

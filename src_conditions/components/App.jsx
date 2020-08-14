import React from "react";
import Login from "./Login";
import Form from "./Form";

let isLoggedIn = false;
const time = new Date().getHours();

function App_lesson() {
  return (
    <div className="container">
      {//isLoggedIn ? <h1>Hello</h1> : <Login />

      // render nothing in else part
      //time > 12 ? <h1>Why still working?</h1> : null

      // to same, ale vyuziti nevyhdnoceni druheho v AND
      time > 12 && <h1>Why still working?</h1>}
    </div>
  );
}

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

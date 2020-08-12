import React from "react";
/*
function App() {
  //const state = React.useState(0); //useState(initial value)
  // destrukturalizace
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
*/
function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  function showCurrentTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(showCurrentTime, 1000);

  return (
    <div className="container">
      <h1 id="currentTime">{time}</h1>
      {/*
      <button onClick={showCurrentTime}>Get Time</button>
      */}
    </div>
  );
}

export default App;

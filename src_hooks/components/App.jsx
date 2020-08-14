import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [heading, setHeading] = React.useState("");

  // takto se dostanu k value imputu z buttonu
  function handleChange(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

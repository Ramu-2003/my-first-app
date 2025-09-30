import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello, React 🚀");

  const changeMessage = () => {
    setMessage("You clicked the button 🎉");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <button 
        onClick={changeMessage} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App() {

  setInterval(updateTime, 1000)
  const [time, timeFun] = useState(new Date().toLocaleTimeString());

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    timeFun(newTime)
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

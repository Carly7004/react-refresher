import { useEffect, useState } from "react";
import React from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [intervalID, setintervalID] = useState(null);

  const inCrement = () => {
    if (intervalID) return;

    const timeID = setInterval(() => {
      setCounter((current) => current + 1);
    }, 100);

    setintervalID(timeID);
  };

  const DeCrement = () => {
    if (!intervalID) return;
    clearInterval(intervalID);
    setintervalID(null);
    setCounter(0);
  };

  useEffect(
    () => () => {
      clearInterval(intervalID);
    },
    [intervalID]
  );

  return (
    <div className="App">
      <h1>Counter with Hook State</h1>
      <h1>{counter}</h1>
      <button onClick={inCrement} disabled={counter > 1}>Start</button>
      <button onClick={DeCrement} disabled={counter <= 1}>Stop</button>
    </div>
  );
}

export default Counter;

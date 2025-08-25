import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((inc) => inc + 1);
  };
  const handleDecrement = () => {
    setCounter((dec) => (dec > 0 ? dec - 1 : 0));
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4>{counter}</h4>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleReset()} disabled={counter === 0}>
          Reset
        </button>
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>
    </div>
  );
}

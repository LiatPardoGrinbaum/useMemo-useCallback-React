import "./App.css";
import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const sumOfNums = calculateSum(count1);

  const incrementCount = (setCount) => {
    setCount((prev) => prev + 1);
  };

  console.log("parent component rendered");
  return (
    <div className="App">
      <div className="box">
        <div className="countBox">
          <p>Count1</p>
          <button className="btn" onClick={() => incrementCount(setCount1)}>
            +
          </button>
          <p> {count1}</p>
        </div>
        <div className="countBox">
          <p>Count2</p>
          <button className="btn" onClick={() => incrementCount(setCount2)}>
            +
          </button>
          <p> {count2}</p>
        </div>

        <div>
          <p>Sum of numbers: {sumOfNums}</p>
        </div>
      </div>
    </div>
  );
}
export default App;

function calculateSum(count) {
  for (let i = 0; i < 100000000; i++) {
    count += i;
  }
  console.log("calculating...");
  return count;
}

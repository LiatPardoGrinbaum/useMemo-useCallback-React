import "./App.css";
import { useState, useMemo, useCallback } from "react";
import ChildComp from "./components/ChildComp";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const printCount1 = useCallback(() => {
    console.log("child button clicked");
  }, []);

  // const printCount1 = () => {
  //   console.log("child button clicked");
  // };

  const sumOfNums = useMemo(() => {
    return calculateSum(count1);
  }, [count1]);

  const incrementCount = (setCount) => {
    setCount((prev) => prev + 1);
  };

  console.log("parent component rendered");
  return (
    <div className="App">
      <div className="box">
        <div className="countBox">
          <button className="btn" onClick={() => incrementCount(setCount1)}>
            +
          </button>
          <p> Count1: {count1}</p>
        </div>
        <div className="countBox">
          <button className="btn" onClick={() => incrementCount(setCount2)}>
            +
          </button>
          <p>Count2: {count2}</p>
        </div>
        <div>
          <p>Sum of numbers: {sumOfNums}</p>
        </div>
        <ChildComp printCount1={printCount1} />
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

//**useMemo example**
/* import "./App.css";
import { useState, useMemo, useCallback } from "react";

import ChildComp from "./components/ChildComp";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const sumOfNums = useMemo(() => {
    return calculateSum(count1);
  }, [count1]);

  const incrementCount = (setCount) => {
    setCount((prev) => prev + 1);
  };
  console.log("parent component rendered");
  return (
    <div className="App">
      <div className="box">
        <div className="countBox">
          <button className="btn" onClick={() => incrementCount(setCount1)}>
            +
          </button>
          <p> Count1: {count1}</p>
        </div>
        <div className="countBox">
          <button className="btn" onClick={() => incrementCount(setCount2)}>
            +
          </button>
          <p>Count2: {count2}</p>
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

*/

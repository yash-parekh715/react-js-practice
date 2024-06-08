import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addCount = () => {
    count = count + 1;
    if (count > 20) {
      count = 20;
      setCount(count);
      console.log(count, Math.random());
    } else {
      setCount(count);
      console.log(count);
    }
  };

  const removeCount = () => {
    count = count - 1;
    if (count < 0) {
      count = 0;
      setCount(count);
      console.log(count, Math.random());
    } else {
      setCount(count);
      console.log(count);
    }
  };
  return (
    <>
      <h1>learning useState hook</h1>
      <button onClick={addCount}>add count</button>
      <hr />
      <button onClick={removeCount}>remove count</button>
      <h2>count: {count}</h2>
    </>
  );
}

export default App;

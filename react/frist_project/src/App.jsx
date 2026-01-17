import React, { useMemo } from "react";
import { useState, useEffect, useRef } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(1);

  //heavy task
  function sum() {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum = sum + i;
    }
    return sum;
  }

  let res = useMemo(() => sum(), []);
  useEffect(() => {
    console.log("api called");
  }, []);
  const handleClick = () => {
    setCount(count + 1);
    ref.current = ref.current + 1;
    console.log(ref.current);
  };

  return (
    <>
      <p>value of sum is =  {res}</p>
      <p>value of a is = {count}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default App;

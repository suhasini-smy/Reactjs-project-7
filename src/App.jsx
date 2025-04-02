import React from "react";
import { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const handleSubmit = () => {
    setCount(count + 1);

    ref.current++;

    console.log("State Count", count);
    console.log("Ref Count", ref.current);
  };

  return (
    <>
      <div>Count:{count}</div>
      <button onClick={handleSubmit}>Increment</button>
    </>
  );
};

export default App;

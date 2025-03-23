import React, { useState, useEffect } from "react";

const LifecycleFunction = () => {
  const [count, setCount] = useState(0);

  // ✅ Thay thế componentDidMount() bằng useEffect()
  useEffect(() => {
    console.log("Component mounted");

    // ✅ Thay thế componentWillUnmount()
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Chạy một lần khi component mount

  // ✅ Thay thế componentDidUpdate()
  useEffect(() => {
    console.log(`State updated: ${count}`);
  }, [count]); // Chạy khi count thay đổi

  return (
    <div className="lifecycle-container">
      <h1>React Function Component Lifecycle</h1>
      <button onClick={() => setCount(count - 1)}>Count--</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count++</button>
    </div>
  );
};

export default LifecycleFunction;

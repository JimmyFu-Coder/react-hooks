import React, { useState, useCallback } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
    console.log(count);
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

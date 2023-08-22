import { useState } from "react";

export default function Counter({parentCount, parentSetCount}) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div>
        <span className="number">{count}</span>
        <span className="total_number">/{parentCount}</span>
      </div>
      <button className="button" onClick={event => {
        setCount(prev => prev + 1);
        parentSetCount();
      }}>Add +</button>
    </div>
  );
}
import { useState } from "react";

type CounterProps = {
  total: number;
  onClick: () => void;
}

function Counter({total, onClick}: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span style={{fontSize: '3rem'}}>{count}</span>
      <span>{`/${total}`}</span>
      <button onClick={() => {
        setCount((prev) => prev + 1);
        onClick();
      }}>Add +</button>
    </div>
  )
}

export default Counter;
import { useState } from "react";
import Counter from "./Counter";

function CounterManager() {
  const [total, setTotal] = useState(0);
  const handleClick = () => setTotal((prev) => prev + 1);

  return (
    <>
      <h2>`Total Count: {total} {total < 10 ? <span>❄️</span> : <span>🔥</span>}`</h2>
      <Counter total={total} onClick={handleClick}/>
      <Counter total={total} onClick={handleClick}/>
    </>
  )
}

export default CounterManager; 
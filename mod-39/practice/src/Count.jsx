import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    const currentCount = count;
    setCount(currentCount + 1);
  };

  const handleDec = () => {
    const currentCount = count;
    setCount(currentCount - 1);
  };
  return (
    <div>
      <h3 className="card">Count : {count}</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={handleInc}>+1</button>
        <button onClick={handleDec}>-1</button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div
      style={{
        margin: "5px",
        width: "50vw",
        border: "2px solid red",
        borderRadius: "20px",
      }}
    >
      <h3>Count : {count}</h3>
      <button onClick={() => handleAdd()}>Add </button>
    </div>
  );
}

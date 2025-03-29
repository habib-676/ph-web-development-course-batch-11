import { useState } from "react";

export default function Display() {
  const [show, setShow] = useState(false);

  const showText = () => {
    setShow(true);
  };

  const hideText = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="card">{show && <h3>Hello, React Learner!!</h3>}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={showText}>Show</button>
        <button onClick={hideText}>Hide</button>
      </div>
    </div>
  );
}

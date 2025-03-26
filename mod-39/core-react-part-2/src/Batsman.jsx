import { useState } from "react";

export default function Batsman() {
  let [runs, setRuns] = useState(0);
  let [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFours = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };

  const handleSixes = () => {
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);
    //   count boundaries
    const totalSix = sixes + 1;
    setSixes(totalSix);
  };

  return (
    <div>
      <h3>Player : BD Batsman</h3>
      <small>Sixes : {sixes}</small>
      {runs >= 50 && <p>You Scored a 50 </p>}

      <h1>Score : {runs}</h1>

      <button
        style={{
          margin: 5,
        }}
        onClick={() => handleSingle()}
      >
        Singles
      </button>
      <button
        style={{
          margin: 5,
        }}
        onClick={handleFours}
      >
        Four
      </button>
      <button
        style={{
          margin: 5,
        }}
        onClick={handleSixes}
      >
        Six
      </button>
    </div>
  );
}

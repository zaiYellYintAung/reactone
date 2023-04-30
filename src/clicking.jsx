import { useState } from "react";

const Clicking = () => {
  const title = "Clicking Game";
  let [number, setNumber] = useState(0);
  let handlePlus = () => {
    setNumber(number + 1);
  };
  let handleMinus = () => {
    setNumber(number - 1);
  };

  let handleMultiply = () => {
    setNumber(number * number);
  };

  let handleDivide = () => {
    setNumber(number / number);
  };

  return (
    <>
      <h2>{title}</h2>
      <h1>{number}</h1>
      <div>
        <button onClick={handlePlus} className="button is-hero">
          Plus key
        </button>
        <button onClick={handleMinus} className="button is-hero">
          Minus key
        </button>
        <button onClick={handleMultiply} className="button is-hero">
          Multiply key
        </button>
        <button onClick={handleDivide} className="button is-hero">
          Divide key
        </button>
      </div>
    </>
  );
};

export default Clicking;

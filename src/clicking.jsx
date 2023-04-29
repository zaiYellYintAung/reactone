const Clicking = () => {
  const title = "Clicking Game";
  var number = 0;
  const handlePlus = () => {
    console.log("Clicked");
    number++;
  };
  const handleMinus = () => {
    number++;
  };
  const handleMultiply = () => {
    number++;
  };
  const handleDivide = () => {
    number++;
  };
  return (
    <>
      <h2>{title}</h2>
      <h1>{number}</h1>
      <div>
        <button onClick={handlePlus}>Plus key</button>
        <button onClick={handleMinus}>Minus key</button>
        <button onClick={handleMultiply}>Multiply key</button>
        <button onClick={handleDivide}>Divide key</button>
      </div>
    </>
  );
};

export default Clicking;

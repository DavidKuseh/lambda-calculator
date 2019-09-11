import React from "react";

const NumberButton = (props) => {

function setDisplay (currentDis, num) {
  if (Number(currentDis) === 0 ) {
    return props.setDisplay(num);
  }
    return props.setDisplay(currentDis + num);
}

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number" onClick={() => 
      setDisplay(props.currentDisplay, props.number)}>{props.number}</button>
    </>
  );
};

export default NumberButton;
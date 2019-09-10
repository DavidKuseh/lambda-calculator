import React from "react";

const SpecialButton = ({value}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{value}</button>;
    </>
  );
};

export default SpecialButton;

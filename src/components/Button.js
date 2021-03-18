import React from "react";

export const Button = ({ text, styleBtn, handleEvent, disabled }) => {
  return (
    <button
      onClick={text === "correct" ? () => handleEvent(1) : () => handleEvent(0)}
      className={`btn btn-${styleBtn} mx-2`}
      disabled={disabled}
    >
      {text.toUpperCase()}
    </button>
  );
};

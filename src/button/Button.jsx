import React from "react";

import "./Button.css";

const Button = ({buttonText, onClickHandler}) => {
  return (
    <button className="button" onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;

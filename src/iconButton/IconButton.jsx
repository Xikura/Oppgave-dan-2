import React from "react";

import "./IconButton.css";

const IconButton = ({buttonText, altText, src, onClickHandler}) => {
  return (
    <button className="icon--button" onClick={onClickHandler}>
      <img
        className="icon"
        alt={altText}
        src={src}
      ></img>
      {buttonText}
    </button>
  );
};

export default IconButton;

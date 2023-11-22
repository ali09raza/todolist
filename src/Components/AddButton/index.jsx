import React from "react";
import './Button.scss'

const Button = ({ onClick }) => {
  return (
    <button className="add-btn" onClick={onClick}>
      ADD
    </button>
  );
};

export default Button;

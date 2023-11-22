import React from "react";
import { ReactComponent as AddIcon } from "../../assets/icons/plus-icon.svg";
import "./addButton.scss";

const AddButton = ({ onClick }) => {
  return (
    <button className="add-btn" onClick={onClick}>
      ADD <AddIcon />
    </button>
  );
};

export default AddButton;

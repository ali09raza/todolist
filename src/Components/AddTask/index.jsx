import React, { useState, useEffect } from "react";
import AddButton from "../AddButton";

import "./addTask.scss";

const AddTask = ({ task, onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(task);
  }, [task]);

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue?.trim()) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValueChange}
        placeholder="Enter task..."
      />
      <AddButton onClick={handleAddTask} />
    </div>
  );
};
export default AddTask;

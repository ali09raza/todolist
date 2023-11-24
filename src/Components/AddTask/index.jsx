import React, { useState, useEffect } from "react";
import AddButton from "../AddButton";

import "./addTask.scss";

const AddTask = ({ task, onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  useEffect(() => {
    if (task) {
      setInputValue(task?.heading || "");
      setDescriptionValue(task?.description || "");
    }
  }, [task]);

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() || descriptionValue.trim()) {
      const newTask = {
        heading: inputValue,
        description: descriptionValue,
      };
      onAdd(newTask);
      setInputValue("");
      setDescriptionValue("");
    }
  };

  return (
    <div className="container">
      <div className="inputs-container">
        <div className="input-container">
          <label htmlFor="input">Heading</label>
          <input
            type="text"
            id="input"
            value={inputValue}
            onChange={handleInputValueChange}
            placeholder="Enter task..."
          />
        </div>

        <div className="input-container">
          <label htmlFor="textArea">Description</label>
          <textarea
            id="textArea"
            name="description"
            rows="4"
            cols="30"
            value={descriptionValue}
            onChange={handleDescriptionChange}
            placeholder="Enter description..."
          />
        </div>
      </div>
      <div className="btn-container">
        <AddButton onClick={handleAddTask} />
      </div>
    </div>
  );
};

export default AddTask;

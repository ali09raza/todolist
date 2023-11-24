import React, { useState } from "react";
import AddButton from "../AddButton";

import "./addTask.scss";

const AddTask = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [tasks, setTasks] = useState([]);

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
      setTasks([...tasks, newTask]);
      setInputValue("");
      setDescriptionValue("");
    }
  };

  return (
    <div className="container">
      <label htmlFor="input">Heading</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleInputValueChange}
        placeholder="Enter task..."
      />
      
      <label htmlFor="textArea">Description</label><br/>
      <textarea
        id="textArea"
        name="description"
        rows="4" cols="30"
        value={descriptionValue}
        onChange={handleDescriptionChange}
        placeholder="Enter description..."
      />
      <AddButton onClick={handleAddTask} />
     
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.heading}:</strong> {task.description}
              
              

              
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default AddTask;

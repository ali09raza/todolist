import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Button from "../Button/Button";

const MainN = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
    console.log(taskText);
  };

  const handleAddTask = () => {
    const newTask = {
      text: taskText,
      id: Date.now(),
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  
  return (
    <div className="todo-container">
      <Heading />
      <div className="add-task">
        <Input value={taskText} onChange={handleInputChange} />
        <Button onClick={handleAddTask} />
      </div>
  
      <div className="todo-list">
        {tasks.map((task) => (
          <div className="todo-item" key={task.id}>
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainN;

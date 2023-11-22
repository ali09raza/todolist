import React, { useState } from "react";
import "./taskList.scss";
import AddTask from "../AddTask";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState({
    value: "",
    index: null,
  });

  const addTask = (task) => {
    if (editTask?.index) {
      const prevousTasks = [...tasks];
      prevousTasks[editTask?.index] = task;

      setTasks(prevousTasks);
      setEditTask({
        value: "",
        index: null,
      });
    } else {
      setTasks((prevState) => [task, ...prevState]);
    }
  };

  const handleEditTask = (task, index) => {
    setEditTask({
      value: task,
      index: index,
    });
  };

  const deleteTask = (index) => {
    const previousTask = [...tasks];
    previousTask.splice(index, 1);
    setTasks(previousTask);
  };

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <AddTask task={editTask?.value} onAdd={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div className="action_container">
              <span onClick={() => handleEditTask(task, index)}>Edit</span>
              <span onClick={() => deleteTask(index)}>Delete</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

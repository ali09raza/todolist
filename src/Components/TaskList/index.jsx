import React, { useState } from "react";
import "./taskList.scss";
import AddTask from "../AddTask";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState({
    heading: "",
    description: "",
    index: null,
  });

  const addTask = (task) => {
    if (editTask.index !== null) {
      const previousTasks = [...tasks];
      previousTasks[editTask.index] = task;

      setTasks(previousTasks);
      setEditTask({
        heading: "",
        description: "",
        index: null,
      });
    } else {
      setTasks((prevState) => [task, ...prevState]);
    }
  };

  const handleEditTask = (task, index) => {
    setEditTask({
      heading: task.heading,
      description: task.description,
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
      <AddTask task={editTask} onAdd={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.heading}:</strong> {task.description}
            {/* {task} */}
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

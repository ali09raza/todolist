import React, { useState } from "react";
import AddTask from "../AddTask";
import ListItem from "../ListItem";
import "./taskList.scss";
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

  const handleEditTask = (task) => {
    setEditTask({
      heading: task.heading,
      description: task.description,
      index: task?.index,
    });
  };

  const deleteTask = (index) => {
    const previousTask = [...tasks];
    previousTask.splice(index, 1);
    setTasks(previousTask);
  };

  console.log("Tasks", tasks);

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <AddTask task={editTask} onAdd={addTask} />

      {tasks.map((task, index) => (
        <ListItem
          key={index}
          index={index}
          heading={task?.heading}
          description={task?.description}
          onEdit={handleEditTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};
export default TaskList;

import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

// eslint-disable-next-line react/prop-types
function TaskItem({ task }) {
  const { setTasks } = useContext(TaskContext);

  const deleteTask = (id) => {
    // eslint-disable-next-line no-shadow,react/prop-types
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <span>{task.title}</span>
      {/* eslint-disable-next-line react/button-has-type,react/prop-types */}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;

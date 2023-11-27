import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from './TaskContext';

// eslint-disable-next-line react/prop-types
function TaskList({ filter }) {
  const { tasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // pour 'all'
  });

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

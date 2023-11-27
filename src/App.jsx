import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { TaskContextProvider } from './components/TaskContext';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const initialTasks = [
      { id: 1, title: 'Acheter du lait', completed: false },
      { id: 2, title: 'Acheter du pain', completed: false },
      { id: 3, title: 'Acheter des fruits et légumes', completed: false },
      { id: 4, title: 'Courir 30 minutes', completed: false },
      { id: 5, title: 'Séance de yoga', completed: false },
    ];

    setTasks(initialTasks);
  }, []);

  return (
    <TaskContextProvider value={{ tasks, setTasks }}>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskFilter />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}

export default App;

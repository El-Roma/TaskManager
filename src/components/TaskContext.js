import React, { createContext } from 'react';

export const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export function TaskContextProvider({ children, value }) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

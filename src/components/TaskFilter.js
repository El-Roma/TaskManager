import React from 'react';

// eslint-disable-next-line react/prop-types
function TaskFilter({ setFilter }) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setFilter('all')}>All</button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setFilter('active')}>Active</button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
}

export default TaskFilter;

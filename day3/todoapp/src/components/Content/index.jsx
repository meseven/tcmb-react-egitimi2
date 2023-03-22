import React from 'react';
import Filter from './Filter';
import List from './List';

function Content({
  todos,
  toggleTodo,
  deleteTodo,
  activeFilter,
  setActiveFilter,
  clearCompleted,
}) {
  return (
    <>
      <List
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        activeFilter={activeFilter}
      />
      <Filter
        todos={todos}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        clearCompleted={clearCompleted}
      />
    </>
  );
}

export default Content;

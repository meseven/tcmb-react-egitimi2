import React from 'react';
import Item from './Item';

function List({ todos, toggleTodo, deleteTodo, activeFilter }) {
  return (
    <section className='main'>
      <ul className='todo-list'>
        {getFilteredData(todos, activeFilter).map((todo) => (
          <Item
            todo={todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}

const getFilteredData = (todos, filter) => {
  let filtered = todos;

  if (filter !== 'all') {
    filtered = todos.filter((todo) =>
      filter === 'active' ? !todo.completed : todo.completed
    );
  }

  return filtered;
};

export default List;

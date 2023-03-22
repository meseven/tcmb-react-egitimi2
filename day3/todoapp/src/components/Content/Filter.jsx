import React from 'react';

function Filter({ todos, activeFilter, setActiveFilter, clearCompleted }) {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemsLeft} </strong>
        item{itemsLeft > 1 && 's'} left
      </span>

      <ul className='filters'>
        <li
          onClick={() => setActiveFilter('all')}
          className={activeFilter === 'all' ? 'selected' : ''}
        >
          All
        </li>
        <li
          onClick={() => setActiveFilter('active')}
          className={activeFilter === 'active' ? 'selected' : ''}
        >
          Active
        </li>
        <li
          onClick={() => setActiveFilter('completed')}
          className={activeFilter === 'completed' ? 'selected' : ''}
        >
          Completed
        </li>
      </ul>

      <button className='clear-completed' onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Filter;

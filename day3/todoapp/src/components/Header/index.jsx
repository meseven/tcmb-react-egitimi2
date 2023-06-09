import React, { useState } from 'react';
import { useTodos } from '../../context/TodoContext';

function Header() {
  const [text, setText] = useState('');

  const { addTodo } = useTodos();

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo(text);
    setText('');
  };

  return (
    <header className='header'>
      <h1>todos</h1>

      <div>
        <div>
          <input className='toggle-all' type='checkbox' />
          <label htmlFor='toggle-all'>Mark all as complete</label>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className='new-todo'
            placeholder='What needs to be done?'
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;

import { useTodos } from '../../../context/TodoContext';

function Item({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.text}</label>
        <button
          className='destroy'
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
    </li>
  );
}

export default Item;

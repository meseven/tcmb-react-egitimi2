import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [todos, setTodos] = useState([
    { id: '1', text: 'React Öğren', completed: true },
    { id: '2', text: 'JavaScript Öğren', completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: nanoid(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    const filtered = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(filtered);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));

  const values = {
    activeFilter,
    setActiveFilter,
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error('Custom error message!');
  }

  return context;
};

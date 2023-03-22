import { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { nanoid } from 'nanoid';

function App() {
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

  return (
    <>
      <section className='todoapp'>
        <Header addTodo={addTodo} />
        <Content
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          clearCompleted={clearCompleted}
        />
      </section>

      <Footer />
    </>
  );
}

export default App;

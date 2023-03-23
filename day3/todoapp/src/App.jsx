import { TodoContextProvider } from './context/TodoContext';

// components
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <TodoContextProvider>
      <section className='todoapp'>
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoContextProvider>
  );
}

export default App;

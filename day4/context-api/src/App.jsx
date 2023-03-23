// context
import { ThemeContextProvider } from './context/ThemeContext';
import { LangContextProvider } from './context/LangContext';

// components
import Container from './components/Container';
import Header from './components/Header';

function App() {
  return (
    <>
      <LangContextProvider>
        <ThemeContextProvider>
          <Container />
        </ThemeContextProvider>
      </LangContextProvider>
    </>
  );
}

export default App;

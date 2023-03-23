import './App.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Settings from './components/Settings';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Counter />
        <Settings />
      </div>
    </Provider>
  );
}

export default App;

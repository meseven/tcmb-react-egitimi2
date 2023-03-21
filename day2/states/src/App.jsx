// import { useState } from 'react';
import './App.css';
// import Header from './components/Header';
// import Counter from './components/Counter';
// import User from './components/User';
import Users from './components/Users';

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='App'>
      {/* <Header /> */}
      {/* <User /> */}
      <Users />

      {/* <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <Counter />} */}
    </div>
  );
}

export default App;

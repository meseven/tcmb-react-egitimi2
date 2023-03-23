import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Header from './Header';
import Settings from './Settings';

function Container() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <hr />
      <Settings />
    </div>
  );
}

export default Container;

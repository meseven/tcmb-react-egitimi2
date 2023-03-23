import React, { useContext } from 'react';
import LangContext from '../context/LangContext';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const { theme, setTheme, name } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <div>
      <div>Active Theme: {theme}</div>
      <div>Active Language: {lang}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>

      <br />

      <div>{name}</div>
    </div>
  );
}

export default Header;

import React, { useContext } from 'react';
import LangContext from '../context/LangContext';
import ThemeContext from '../context/ThemeContext';

function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <div>
      Settings
      <div>Theme: {theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
      <br />
      <br />
      <div>Language: {lang}</div>
      <button
        onClick={() => setLang('en-US')}
        className={lang === 'en-US' ? 'active' : ''}
      >
        EN
      </button>
      <button
        onClick={() => setLang('tr-TR')}
        className={lang === 'tr-TR' ? 'active' : ''}
      >
        TR
      </button>
    </div>
  );
}

export default Settings;

import { useLang } from '../context/LangContext';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, setTheme, name } = useTheme();
  const { lang } = useLang();

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

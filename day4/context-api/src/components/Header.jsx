import { useLang } from '../context/LangContext';
import useThemeStore from '../store/useThemeStore';

function Header() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const { lang } = useLang();

  return (
    <div>
      <div>Active Theme: {theme}</div>
      <div>Active Language: {lang}</div>
      <button onClick={toggleTheme}>Change Theme</button>

      <br />

      <div>{name}</div>
    </div>
  );
}

export default Header;

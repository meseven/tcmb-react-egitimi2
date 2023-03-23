import useThemeStore from '../store/useThemeStore';

function Settings() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div>
      Settings
      <div>Theme: {theme}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Settings;

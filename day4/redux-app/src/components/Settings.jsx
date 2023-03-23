import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';

function Settings() {
  const activeTheme = useSelector((state) => state.theme.activeTheme);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Settings</h2>
      <h3>Active Theme: {activeTheme}</h3>

      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
}

export default Settings;

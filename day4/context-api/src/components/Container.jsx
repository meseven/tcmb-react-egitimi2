import useThemeStore from '../store/useThemeStore';
import Header from './Header';
import Settings from './Settings';

function Container() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <hr />
      <Settings />
    </div>
  );
}

export default Container;

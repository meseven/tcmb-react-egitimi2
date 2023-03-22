import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul className='menu'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/users'>Users</Link>
      </li>
    </ul>
  );
}

export default Menu;

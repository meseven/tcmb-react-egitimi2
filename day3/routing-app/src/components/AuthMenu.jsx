import { Link } from 'react-router-dom';

function AuthMenu() {
  return (
    <div className='auth_menu'>
      <Link to='/auth'>Login</Link>
      <Link to='/auth/register'>Register</Link>
      <Link to='/auth/forgot-password'>Forgot Password</Link>
    </div>
  );
}

export default AuthMenu;

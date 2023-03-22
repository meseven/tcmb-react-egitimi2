import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form className='form'>
        <div>
          <label htmlFor='email'>E-Mail</label>
          <input id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type={'password'} />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

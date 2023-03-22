import React from 'react';

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form className='form'>
        <div>
          <label htmlFor='fullname'>Fullname</label>
          <input id='fullname' />
        </div>
        <div>
          <label htmlFor='email'>E-Mail</label>
          <input id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type={'password'} />
        </div>

        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

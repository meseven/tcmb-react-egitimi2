import React from 'react';

function ForgotPassword() {
  return (
    <div>
      <h2>Forgot Password</h2>
      <form className='form'>
        <div>
          <label htmlFor='email'>E-Mail</label>
          <input id='email' />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;

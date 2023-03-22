import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthMenu from '../components/AuthMenu';

function AuthLayout() {
  return (
    <div className='auth_layout'>
      <AuthMenu />

      <div className='auth_content'>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

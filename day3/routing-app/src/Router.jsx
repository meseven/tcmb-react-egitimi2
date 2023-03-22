import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Dashboard/Home';
import About from './pages/Dashboard/About';
import Users from './pages/Dashboard/Users';
import UserDetail from './pages/Dashboard/UserDetail';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';

// layouts
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

const Router = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='users' element={<Users />} />
        <Route path='users/:user_id' element={<UserDetail />} />
      </Route>

      <Route path='auth' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default Router;

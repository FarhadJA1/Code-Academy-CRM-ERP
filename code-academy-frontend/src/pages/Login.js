import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/style/Login/LoginArea.scss';
import LoginInputs from '../components/Login/LoginInputs';
import LoginLogo from '../components/Login/LoginLogo';
function Login() {
  return (
    <div className='login-area'>
      <Link className='nav-link' to={'/'}>
        <LoginLogo />
        <LoginInputs />
      </Link>

    </div>
  )
}

export default Login

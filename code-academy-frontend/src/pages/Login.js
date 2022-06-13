import React from 'react'
import '../assets/style/Login/LoginArea.scss';
import LoginInputs from '../components/Login/LoginInputs';
import LoginLogo from '../components/Login/LoginLogo';
function Login() {
  return (
    <div className='login-area'>
      <LoginLogo/>
      <LoginInputs/>
    </div>
  )
}

export default Login

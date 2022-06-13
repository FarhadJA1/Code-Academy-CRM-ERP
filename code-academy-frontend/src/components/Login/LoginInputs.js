import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Login/LoginInputs.scss'
function LoginInputs() {

    return (
        <div className='login-inputs'>
            <div>
                <TextField
                    id="outlined-required"
                    label="Email"
                    className='login-input'
                    type='email'
                />
            </div>
            <div>
                <TextField
                    id="outlined-required"
                    label="Password"
                    className='login-input mt-4'
                    type='password'
                />
            </div>
            <div className='login-input-links mt-4'>
                <button type="button" class="btn btn-outline-primary sign-in-btn">Sign in</button>
                <Link className='forgot-password' to={'/resource'}>
                    <h6>Forgot password?</h6>
                </Link>
            </div>

        </div>
    )
}

export default LoginInputs

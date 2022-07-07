import React from 'react'
import { TextField } from '@mui/material'
import '../../assets/style/Login/ForgotFromEmail.scss'
import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';

function ForgotFromEmail() {
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const navigate = useNavigate();
  const { email } = useParams();
  let route = window.location.href;
  let token = route.split('token=')[1];
  const url = "https://localhost:44380"

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const Reject = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function ResetPassword(e) {

    let obj = {
      Password: password,
      Email: email,
      Token: token
    }
    e.preventDefault()
    if (password === confirmPass) {
      axios.post(`${url}/api/Account/ChangePassword`, obj
        , { 'Content-Type': 'multipart/form-data' })
        .then(function (response) {

          Success.fire({
            icon: 'success',
            title: 'Password successfully changed'
          })
          navigate('/');
        })
        .catch(function (error) {
          Reject.fire({
            icon: 'error',
            title: 'Something went wrong'
          })

        });
    }
  }
  return (
    <div className='forgot-from-email'>
      <LockResetIcon className='lockreset-icon mb-3'/>
      <TextField sx={{ input: { borderColor: 'red' } }} onChange={(e) => setPassword(e.target.value)} type='password' autoComplete='off' className='forgot-email-input-up' id="outlined-basic" label="Password" variant="outlined" />
      <TextField onChange={(e) => setConfirmPass(e.target.value)} type='password' autoComplete='off' className='forgot-email-input-down mt-3' id="outlined-basic" label="Confirm Password" variant="outlined" />
      <button onClick={(e) => ResetPassword(e)} className='forgot-from-email-btn  mt-3'>Change Password</button>
    </div>
  )
}

export default ForgotFromEmail

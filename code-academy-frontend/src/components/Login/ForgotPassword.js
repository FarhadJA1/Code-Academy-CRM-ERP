import React from 'react'
import { TextField } from '@mui/material'
import '../../assets/style/Login/ForgotPassword.scss'
import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import {useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const url = "https://localhost:44380"
    function GoBack() {
        navigate('/');
    }
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
    const [forgotEmail,setForgotEmail]=useState();
    async function ResetPassword(e) {
        debugger
        e.preventDefault();
        await axios.post(`${url}/api/Account/ForgotPassword`, {
            Email: forgotEmail,

        }, { 'Content-Type': 'multipart/form-data' })
            .then(function (response) {                
                Success.fire({
                    icon: 'success',
                    title: 'Please, check your email'
                })
            })
            .catch(function (error) {


            });
    }
    return (
        <div className='forgot-password-area'>
            <img className='forgot-image mb-3' src={require('../../assets/img/pngwing.com.png')} alt="" />
            <TextField onChange={(e)=>setForgotEmail(e.target.value)} autoComplete='off' className='forgot-email-input' type='email' id="outlined-basic" label="Email" variant="outlined" />
            <button onClick={(e)=>ResetPassword(e)} type="button" className=" mt-4 forgot-button" data-bs-dismiss="modal">Send</button>
            <button onClick={()=>GoBack()} type="button" className=" mt-4 go-back-button" data-bs-dismiss="modal">Go Back</button>
        </div>
    )
}

export default ForgotPassword

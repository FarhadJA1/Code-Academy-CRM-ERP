import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import '../assets/style/UserProfile/UserProfile.scss'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import UpdatePassword from '../components/Login/UpdatePassword';
import Swal from 'sweetalert2';
function UserProfile() {
    const url = "https://localhost:44380"
    let token = localStorage.getItem('token');
    const [currentpassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    let [photo, setPhoto] = useState();
    let userdet = parseJwt(token)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    const [user, setUser] = useState();

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

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    useEffect(() => {
        if (token != null) {

            let email = parseJwt(token).sub[1]
            axios.get(`${url}/api/Account/GetUserByEmail/${email}`)
                .then((res) => {
                    setUser(res.data)
                    setPhoto(res.data.photo)

                })
        }

    }, [])

    async function ResetPassword(e) {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            await axios.put(`${url}/api/Account/UpdatePassword/${user?.email}`, {
                CurrentPassword: currentpassword,
                NewPassword: newPassword
            }, { 'Content-Type': 'multipart/form-data' })
                .then(function (response) {

                    Success.fire({
                        icon: 'success',
                        title: 'Password successfully updated'
                    })
                })
                .catch(function (error) {
                    Reject.fire({
                        icon: 'error',
                        title: 'Something went wrong'
                    })
                });
        }

    };


    function ChangePhoto(e) {

        var base64String = getBase64(e.target.files[0]);
        base64String.then(function (result) {
            setPhoto(result)
            axios.put(`${url}/api/Account/ChangeImage/${user?.email}`, {
                Photo: result
            }, { 'Content-Type': 'multipart/form-data' })
                .then(function (response) {
                    Success.fire({
                        icon: 'success',
                        title: 'Profile photo successfully changed'
                    })
                })
                .catch(function (error) {
                    Reject.fire({
                        icon: 'error',
                        title: 'Something went wrong'
                    })

                });

        });

    }
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.replace('data:', '')
                .replace(/^.+,/, ''))
            reader.onerror = error => reject(error);
        });
    }

    function OpenFile(e) {
        e.preventDefault();
        document.getElementById('file').click()
    }
    console.log(photo);
    return (
        <div>
            <div className='user-profile-header mt-3 ms-4'>
                <div className='me-3 profile-image-area'>
                    {
                        photo == "" ?
                            <img className='profile-image-btn' src={require('../assets/img/avatar.png')} alt="avatar" />
                            : <img className='profile-image' src={`data:image/jpeg;base64,${photo}`} alt="dfsfds" />
                    }

                    <button onClick={(e) => OpenFile(e)} className='btn btn-outline-secondary change-image'><CameraAltIcon /></button>
                    <input onChange={(e) => ChangePhoto(e)} type={'file'} id="file" className='d-none' />

                </div>
                <div>
                    <h4>{user?.email}</h4>
                    <h3>{user?.fullName}</h3>
                    <h5>{userdet}</h5>
                    <UpdatePassword
                        currentpassword={currentpassword} setCurrentPassword={setCurrentPassword}
                        newPassword={newPassword} setNewPassword={setNewPassword}
                        resetPassword={ResetPassword}
                        confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
                    />
                </div>

            </div>


        </div>
    )
}

export default UserProfile

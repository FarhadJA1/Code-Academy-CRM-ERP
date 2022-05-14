import React from 'react'
import '../../assets/style/Navigation/Profile.scss'
function Profile() {
    return (
        <div className='profile'>
            <button type="button" className="btn btn-outline-light " data-bs-toggle="dropdown" aria-expanded="false">
                Hi, User!
                <img className='profile-image-btn' src={require('../../assets/img/avatar.png')} alt="avatar" />
            </button>
            <ul className="dropdown-menu">
                <li>
                    <img className='profile-image-list' src={require('../../assets/img/avatar.png')} alt="avatar" />
                </li>
                <li>
                    Name - Surname
                </li>
                <li className='email-address'>
                    Email@email
                </li>

                <li>
                    <i className="far fa-edit"></i> Edit Profile
                </li>
                <li className='inbox'>
                    <i className="far fa-envelope"></i> My Inbox
                </li>

                <li className='logout'>
                    <i className="fas fa-outdent"></i> Logout

                </li>

            </ul>
        </div>
    )
}

export default Profile

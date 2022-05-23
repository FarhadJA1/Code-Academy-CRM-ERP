import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Navigation/Social.scss'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
function Social() {
    return (
        <div className='container nav-social'>
            <div className="row mt-3">
                <h6 className='nav-title'>APPS</h6>
                <Link className='nav-link' to={'/email'}>
                    <AlternateEmailOutlinedIcon className='nav-icon' />
                    <span>Email</span>
                </Link>
                <Link className='nav-link' to={'/chat'}>
                <ChatOutlinedIcon className='nav-icon' />
                    <span>Chat</span>
                </Link>
            </div>

        </div>
    )
}

export default Social

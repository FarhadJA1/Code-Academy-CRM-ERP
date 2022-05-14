import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Navigation/Social.scss'
function Social() {
  return (
    <div className='container nav-social'>
            <div className="row mt-3">
                <h6 className='nav-title'>APPS</h6>
                <Link className='nav-link' to={'/email'}>
                <i className="fas fa-at"></i>
                    <span>Email</span>
                </Link>
                <Link className='nav-link' to={'/chat'}>
                <i className="fas fa-comment-dots"></i>
                    <span>Chat</span>
                </Link>
            </div>

        </div>
  )
}

export default Social

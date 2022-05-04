import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className='main'>
        <Link to='/'>
        <div className="container">
        <h6>MAIN</h6>
        <i className="fas fa-home"></i>

        </div>
        </Link>
        
    </div>
  )
}

export default Main

import React from 'react'
import '../../assets/style/Navigation/Header.scss'
import Language from '../Navbar/Language'
import Profile from '../Navbar/Profile'
function Header() {
  return (
    <div className='header'>
      <Language/>
      <Profile/>
    </div>
  )
}

export default Header

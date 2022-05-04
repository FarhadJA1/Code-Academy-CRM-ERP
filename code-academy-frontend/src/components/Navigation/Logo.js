import React from 'react'
import '../../assets/style/Navigation/Logo.scss'
function Logo() {
  return (
    <div className='logo-label'>
      <img className='logo' src={require("../../assets/img/logo-footer.png")} alt="" />
    </div>
  )
}

export default Logo

import React from 'react'
import Logo from './Navigation/Logo.js'
import '../assets/style/Navigate.scss'
import Main from './Navigation/Main.js'
import { Link } from 'react-router-dom'
import { NavItem } from 'reactstrap'
function Navigate() {
    return (
        <div className='navigation'>
            <Logo/>
            <Main/>
        </div>
    )
}

export default Navigate


import Group  from '../Navbar/Operations'
import React from 'react'
import '../../assets/style/Navigation/Navigation.scss'
import Logo from '../Navbar/Logo'
import Main from '../Navbar/Main'
import Social from '../Navbar/Social'
import Operations from '../Navbar/Operations'


function Navigation() {
    return (
        <div className='navigation'>
            <Logo/>
            <Main/>
            <Social/>
            <Operations/>
            
        </div>

    )
}

export default Navigation

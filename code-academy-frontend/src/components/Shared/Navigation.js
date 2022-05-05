
import React from 'react'
import '../../assets/style/Navigation/Navigation.scss'
import Logo from '../Navbar/Logo'
import Main from '../Navbar/Main'
import Social from '../Navbar/Social'


function Navigation() {
    return (
        <div className='navigation'>
            <Logo/>
            <Main/>
            <Social/>
        </div>

    )
}

export default Navigation

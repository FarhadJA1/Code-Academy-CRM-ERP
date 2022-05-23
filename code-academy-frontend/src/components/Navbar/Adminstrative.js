import React from 'react'
import { Link } from 'react-router-dom'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
function Adminstrative() {
    return (
        <div className='container nav-operations'>
            <div className="row mt-3">
                <h6 className='nav-title'>ADMINSTRATIVE</h6>
                <Link className='nav-link' to={'/paytype'}>
                    <PaymentsOutlinedIcon className='nav-icon' />
                    <span>Payment Options</span>
                </Link>
                <Link className='nav-link' to={'/education'}>
                    <SchoolOutlinedIcon className='nav-icon' />
                    <span>Education Type</span>
                </Link>
                <Link className='nav-link' to={'/resource'}>
                    <DirectionsOutlinedIcon className='nav-icon' />
                    <span>Resources</span>
                </Link>
            </div>
        </div>
    )
}

export default Adminstrative

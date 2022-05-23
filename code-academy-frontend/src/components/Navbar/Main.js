import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Navigation/Main.scss'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
function Main() {
    return (
        <div className='container nav-main'>
            <div className="row mt-3">
                <h6 className='nav-title'>MAIN</h6>
                <Link className='nav-link' to={'/reports'}>
                    <BarChartOutlinedIcon className='nav-icon'/>
                    <span>Analitics</span>
                </Link>
                <Link className='nav-link' to={'/finance'}>
                <AutoGraphOutlinedIcon className='nav-icon'/>
                    <span>Financial Report</span>
                </Link>
            </div>

        </div>
    )
}

export default Main

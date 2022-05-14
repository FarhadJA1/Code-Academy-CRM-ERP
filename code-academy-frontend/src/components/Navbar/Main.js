import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Navigation/Main.scss'
function Main() {
    return (
        <div className='container nav-main'>
            <div className="row mt-3">
                <h6 className='nav-title'>MAIN</h6>
                <Link className='nav-link' to={'/reports'}>
                    <i className="fas fa-chart-line"></i>
                    <span>Analitics</span>
                </Link>
                <Link className='nav-link' to={'/finance'}>
                    <i className="fas fa-balance-scale-left"></i>
                    <span>Financial Report</span>
                </Link>
            </div>

        </div>
    )
}

export default Main

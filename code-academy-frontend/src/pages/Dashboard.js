
import React from 'react'
import '../assets/style/Dashboard.scss'
import From from '../components/Dashboard/From'
import Welcome from '../components/Dashboard/Welcome'
function Dashboard() {
  return (
    <div className='dashboard'>
      <Welcome />
      <From />
    </div>
  )
}

export default Dashboard

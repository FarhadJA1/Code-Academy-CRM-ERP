
import axios from 'axios';
import React, { useEffect } from 'react'
import '../assets/style/Dashboard.scss'
import From from '../components/Dashboard/From'
import Welcome from '../components/Dashboard/Welcome'
function Dashboard() {
  useEffect(() => {
    axios
      .get("https://localhost:44327/api/Home/GetAll")
      .then(data => console.log(data.data))
      .catch(error => console.log(error));

  });

  return (
    <div className='dashboard'>
      <Welcome />
      <From />
    </div>
  )
}

export default Dashboard

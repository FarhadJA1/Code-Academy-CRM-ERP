import React from 'react'

function Welcome() {
  return (
    <div className='container'>
        <div className="row welcome">
        <div className="col-lg-6 welcome-text">
            <h1>Hi, Welcome back user!</h1>
            <h5>Let`s start</h5>
          </div>
          <div className="col-lg-6">
            <img className='welcome-img' src={require('../../assets/img/welcome-img.png')} alt="welcome" />
          </div>
        </div>
      </div>
  )
}

export default Welcome

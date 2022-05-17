import React from 'react'

function From() {
    return (
        <div className='container'>
            <div className="row mt-5 from">
                <div className="col-lg-3 info phone">
                    <div className="col-lg-4 icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>From call</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>

                <div className="col-lg-3 info social-network">
                    <div className="col-lg-4 icon">
                        <i class="fas fa-share-alt"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>From social networks</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>
                <div className="col-lg-3 info web">
                    <div className="col-lg-4 icon">
                        <i class="fas fa-globe"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>From web</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>
                <div className="col-lg-3 info suggestion">
                    <div className="col-lg-4 icon">
                        <i class="fas fa-people-arrows"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>From suggestion</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default From

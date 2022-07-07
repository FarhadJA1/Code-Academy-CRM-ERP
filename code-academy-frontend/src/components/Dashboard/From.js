import React from 'react'
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
function From(props) {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className="row mt-5 from">
                <div className="col-lg-3 info phone">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-phone-alt"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from call`)}</p>                        
                        <CountUp className='detail-sum ms-4' end={props.fromCall.length}/>
                    </div>
                </div>

                <div className="col-lg-3 info social-network">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-share-alt"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from social networks`)}</p>                        
                        <CountUp className='detail-sum ms-5' end={props.fromSocial.length}/>
                    </div>
                </div>
                <div className="col-lg-3 info web">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-globe"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from web`)}</p>                       
                        <CountUp className='detail-sum ms-4' end={props.fromWeb.length}/>
                    </div>
                </div>
                <div className="col-lg-3 info suggestion">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-people-arrows"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from suggestion`)}</p>                        
                        <CountUp className='detail-sum ms-5' end={props.fromSuggestion.length}/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default From


import React from 'react'

import '../../assets/style/Navigation/Language.scss'
function Language() {
    return (
        <div class="btn-group language">
            <button type="button" class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={require('../../assets/img/eng-flag.png')} alt="english flag" />
                English
            </button>
            <ul class="dropdown-menu">
                <li>
                    <img src={require('../../assets/img/aze-flag.jpg')} alt="azerbaijani flag" />
                    Azərbaycan
                </li>

            </ul>
        </div>
    )
}

export default Language
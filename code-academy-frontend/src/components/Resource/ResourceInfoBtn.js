import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function ResourceInfoBtn() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-info resource-button" data-bs-toggle="modal" data-bs-target="#resource-detail"><InfoOutlinedIcon /></button>

            <div className="modal fade" id="resource-detail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Resource Details</h5>
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary resource-button">Go Back</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceInfoBtn

import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function ResourceInfoBtn() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-info resource-button" data-bs-toggle="modal" data-bs-target="#resource-detail"><InfoOutlinedIcon /></button>

            <div class="modal fade" id="resource-detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title addition-title" id="exampleModalLabel">Resource Details</h5>
                            <button type="button" class="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary resource-button">Go Back</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceInfoBtn

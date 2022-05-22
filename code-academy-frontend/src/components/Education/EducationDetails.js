import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function EducationDetails() {
    return (
        <div>
            <button type="button" className="btn btn-outline-info education-button" data-bs-toggle="modal" data-bs-target="#info-education"><InfoOutlinedIcon /></button>

            <div class="modal fade" id="info-education" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Education Details</h5>
                            <button type="button" class="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary save-btn group-btn">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationDetails

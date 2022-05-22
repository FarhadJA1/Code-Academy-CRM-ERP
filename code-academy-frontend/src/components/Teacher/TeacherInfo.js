import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function TeacherInfo() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-info teacher-button" data-bs-toggle="modal" data-bs-target="#teacher-detail"><InfoOutlinedIcon /></button>

            <div class="modal fade" id="teacher-detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title addition-title" id="exampleModalLabel">Teacher Details</h5>
                            <button type="button" class="btn-close teacher-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary teacher-button">Go Back</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherInfo

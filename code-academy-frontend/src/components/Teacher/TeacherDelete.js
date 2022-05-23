import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
function TeacherDelete() {
    return (
        <div>
            <button type="button" className="btn btn-outline-danger teacher-button mx-2" data-bs-toggle="modal" data-bs-target="#delete-teacher"><DeleteOutlineOutlinedIcon /></button>


            <div class="modal fade" id="delete-teacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close teacher-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure to permanently delete this teacher?
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-outline-danger teacher-button">Delete</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning teacher-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherDelete

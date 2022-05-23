import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function TeacherEdit() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-warning teacher-button" data-bs-toggle="modal" data-bs-target="#edit-teacher"><EditOutlinedIcon className='settings-button'/></button>


            <div className="modal fade" id="edit-teacher" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Teacher</h5>
                            <button type="button" className="btn-close teacher-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary group-btn">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning teacher-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherEdit

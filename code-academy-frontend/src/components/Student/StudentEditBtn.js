import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function StudentEditBtn() {
  return (
    <div className='addition'>
            <button type="button" className="btn btn-outline-warning student-button" data-bs-toggle="modal" data-bs-target="#edit-student"><EditOutlinedIcon className='settings-button' /></button>


            <div className="modal fade" id="edit-student" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Student</h5>
                            <button type="button" className="btn-close student-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary student-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning student-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default StudentEditBtn

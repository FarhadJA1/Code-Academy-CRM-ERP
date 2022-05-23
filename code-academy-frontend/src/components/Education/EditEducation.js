import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField } from '@mui/material'
function EditEducation() {
    return (
        <div className='addition'>

            <button type="button" className="btn btn-outline-warning education-button" data-bs-toggle="modal" data-bs-target="#edit-education"><EditOutlinedIcon /></button>


            <div className="modal fade" id="edit-education" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Education Type</h5>
                            <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <TextField id="outlined-basic" label="Education type" variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary education-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning education-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEducation



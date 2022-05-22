import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField } from '@mui/material'
function EditEducation() {
    return (
        <div>

            <button type="button" className="btn btn-outline-warning education-button" data-bs-toggle="modal" data-bs-target="#edit-education"><EditOutlinedIcon /></button>


            <div class="modal fade" id="edit-education" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Education Type</h5>
                            <button type="button" class="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body row">
                            <TextField id="outlined-basic" label="Education type" variant="outlined" />
                        </div>
                        <div class="modal-footer">
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



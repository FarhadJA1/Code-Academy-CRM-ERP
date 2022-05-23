import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField } from '@mui/material'
function ClassroomEditBtn() {
    return (
        <div className='addition'>

            <button type="button" className="btn btn-outline-warning classroom-button" data-bs-toggle="modal" data-bs-target="#edit-classroom"><EditOutlinedIcon /></button>


            <div className="modal fade" id="edit-classroom" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Classroom</h5>
                            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <TextField id="outlined-basic" label="Education type" variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary classroom-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning classroom-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassroomEditBtn

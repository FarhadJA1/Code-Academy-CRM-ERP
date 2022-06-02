import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Tooltip } from '@mui/material'
function ClassroomDeleteBtn(props) {
    return (
        <div>
            <Tooltip title="Delete Classroom" placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-danger classroom-button mx-2" data-bs-toggle="modal" data-bs-target={'#delete-classroom' + props.id}><DeleteOutlineOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'delete-classroom' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to permanently delete this classroom?
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.deleteClassroom()} data-bs-dismiss="modal" type="button" className="btn btn-outline-danger classroom-button">Delete</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning classroom-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassroomDeleteBtn

import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Tooltip } from '@mui/material';
function DeleteButton(props) {
    return (
        <div>
            <Tooltip title="Delete Group" placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-danger group-btn mx-2" data-bs-toggle="modal" data-bs-target={'#delete-group' + props.id}><DeleteOutlineOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'delete-group' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body delete-group">
                            Are you sure to permanently delete this group?
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.deleteGroup()} type="button" data-bs-dismiss="modal" className="btn btn-outline-danger group-btn">Delete</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteButton

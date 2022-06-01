import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Tooltip } from '@mui/material'
function TermDeleteBtn(props) {
    return (
        <div>
            <Tooltip title="Delete Lesson Hour" placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value}  type="button" className="btn btn-outline-danger term-button mx-2" data-bs-toggle="modal" data-bs-target={'#delete-term' + props.id}><DeleteOutlineOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'delete-term' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">  
                            Are you sure to permanently delete this term?
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.deleteHour()} type="button" data-bs-dismiss="modal" className="btn btn-outline-danger term-button">Delete</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning term-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermDeleteBtn

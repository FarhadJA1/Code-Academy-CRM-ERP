import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField, Tooltip } from '@mui/material'
function TermEditBtn(props) {
    return (
        <div className='addition'>
            <Tooltip title="Update Lesson Hour" placement="bottom-end">
                <button type="button" onClick={(e) => props.setId(e.target.value)} value={props.value} className="btn btn-outline-warning term-button" data-bs-toggle="modal" data-bs-target={'#update-term' + props.id}><EditOutlinedIcon className='settings-button' /></button>
            </Tooltip>

            <div className="modal fade" id={'update-term' + props.id} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Term</h5>
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body term-modal-body">                           
                            <TextField onChange={(e) => props.setDayInput(e.target.value)} value={props.dayInput} className='term-input' id="outlined-basic" label={props.day} variant="outlined" />
                            <span className='minus'>-</span>
                            <TextField onChange={(e) => props.setTimeInput(e.target.value)} value={props.timeInput} className='term-input' id="outlined-basic" label={props.time} variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary term-button" onClick={() => props.updateHour()}>Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning term-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermEditBtn

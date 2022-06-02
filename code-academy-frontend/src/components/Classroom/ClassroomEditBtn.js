import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField, Tooltip } from '@mui/material'
function ClassroomEditBtn(props) {
    return (
        <div className='addition'>
            <Tooltip title="Update Classroom" placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-warning classroom-button" data-bs-toggle="modal" data-bs-target={'#update-classroom' + props.id}><EditOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'update-classroom' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Classroom</h5>
                            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body classroom-modal-body">
                            <TextField onChange={(e) => props.setNameInput(e.target.value)} value={props.nameInput} className='term-input' id="outlined-basic" label="Name" variant="outlined" />
                            <span className='minus'>-</span>
                            <TextField type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }} onChange={(e) => props.setCapacityInput(e.target.value)} value={props.capacityInput} className='term-input' id="outlined-basic" label="Capacity" variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.updateClassroom()} data-bs-dismiss="modal" type="button" className="btn btn-outline-primary classroom-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning classroom-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassroomEditBtn

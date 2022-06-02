import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
function ClassroomInfoBtn(props) {
    let count = 1;
    return (
        <div className='addition'>
            <div className="modal fade" id={'classroom-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">Classroom Details</h5>
                            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='addition-title'>Name: {props.cl.name}</h6>
                            <br />
                            <h6 className='addition-title'>Capacity: {props.cl.capacity}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary classroom-button" data-bs-target={'#classroom-group-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">Open Group List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'classroom-group-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Group List</h5>
                            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {/* {props.hour.group.map(gr => (
                                    <li>
                                        <span>{count++}</span>
                                        <span>{gr.groupCode}</span>
                                    </li>
                                ))} */}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#classroom-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary classroom-button">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title="Classroom Details" placement="bottom-end">
                <button onClick={() => props.classroomDetails(props.id)} type="button" className="btn btn-outline-info classroom-button" data-bs-toggle="modal" data-bs-target={'#classroom-detail' + props.id}><InfoOutlinedIcon /></button>

            </Tooltip>
        </div>
    )
}

export default ClassroomInfoBtn

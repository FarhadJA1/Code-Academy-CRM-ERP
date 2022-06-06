import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
function TermInfoBtn(props) {
    let count = 1;
    
    return (
        <div className='addition'>
            <div className="modal fade" id={'term-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">Lesson Hour Details</h5>
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='addition-title'>Day: {props.hour.day}</h6>
                            <br />
                            <h6 className='addition-title'>Shift: {props.hour.time}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary term-button" data-bs-target={'#term-group-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">Open Group List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'term-group-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Group List</h5>
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <button type="button" data-bs-target={'#term-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary term-button">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title="Lesson Hour Details" placement="bottom-end">
                <button onClick={() => props.hourDetails(props.hour.id)} type="button" className="btn btn-outline-info term-button" data-bs-toggle="modal" data-bs-target={'#term-detail' + props.id}><InfoOutlinedIcon /></button>
            </Tooltip>
        </div>
    )
}

export default TermInfoBtn

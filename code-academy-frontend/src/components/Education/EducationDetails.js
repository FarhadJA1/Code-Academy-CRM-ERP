import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
function EducationDetails(props) {
    let count = 1;
    return (
        <div className='addition'>
        <div className="modal fade" id={'education-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title addition-title" id="exampleModalToggleLabel">Education Details</h5>
                        <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h6 className='addition-title'>Name: {props.edu.name}</h6>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-outline-primary education-button" data-bs-target={'#education-group-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">Open Group List</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id={'education-group-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalToggleLabel2">Group List</h5>
                        <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            {props.edu.groups.map(group => (
                                <li key={group.id}>
                                    <span>{count++}</span>
                                    <span>{group.groupCode}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-target={'#education-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary education-button">Go Back</button>
                    </div>
                </div>
            </div>
        </div>

        <Tooltip title="Education Details" placement="bottom-end">
            <button onClick={() => props.educationDetails(props.edu.id)} type="button" className="btn btn-outline-info education-button" data-bs-toggle="modal" data-bs-target={'#education-detail' + props.id}><InfoOutlinedIcon /></button>

        </Tooltip>
    </div>
    )
}

export default EducationDetails

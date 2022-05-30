import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';

function ResourceInfoBtn(props) {
    let count = 1;
    return (
        <div className='addition'>
            <div className="modal fade" id={'resource-detail'+props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">Resource Details</h5>
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='addition-title'>Name: {props.resource.name}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary resource-button" data-bs-target={'#resource-student-details'+props.id} data-bs-toggle="modal" data-bs-dismiss="modal">Open Student List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'resource-student-details'+props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Student List</h5>
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {props.resource.students.map(student => (
                                    <li>
                                        <span>{count++}</span>
                                        <span>{student.name + " " + student.surname}</span>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#resource-detail'+props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary resource-button">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title="Resource Details" placement="bottom-end">
                <button onClick={() => props.resourceDetails(props.resource.id)} type="button" className="btn btn-outline-info resource-button" data-bs-toggle="modal" data-bs-target={'#resource-detail'+props.id}><InfoOutlinedIcon /></button>

            </Tooltip>
        </div>
    )
}

export default ResourceInfoBtn

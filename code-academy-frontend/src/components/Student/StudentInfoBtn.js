import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
function StudentInfoBtn(props) {
    function SetValues(params,ada) {
        props.setName(params);
        props.setSurName(ada)
    }
    return (
        <div className='addition'>
            <Tooltip title="Student Details" placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-info student-button" data-bs-toggle="modal" data-bs-target={'#student-details' + props.id}><InfoOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'student-details' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Student Details:</h5>
                            <button type="button" className="btn-close student-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1>{props.student.name}</h1>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary student-button">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentInfoBtn

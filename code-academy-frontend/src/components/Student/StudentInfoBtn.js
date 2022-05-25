import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function StudentInfoBtn() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-info student-button" data-bs-toggle="modal" data-bs-target="#student-detail"><InfoOutlinedIcon /></button>

            <div className="modal fade" id="student-detail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Student Details:</h5>
                            <button type="button" className="btn-close student-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
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
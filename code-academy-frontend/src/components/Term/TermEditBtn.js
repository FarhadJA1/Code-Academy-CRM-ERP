import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function TermEditBtn() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-warning term-button" data-bs-toggle="modal" data-bs-target="#edit-term"><EditOutlinedIcon className='settings-button' /></button>


            <div className="modal fade" id="edit-term" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Term</h5>
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary term-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning term-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermEditBtn

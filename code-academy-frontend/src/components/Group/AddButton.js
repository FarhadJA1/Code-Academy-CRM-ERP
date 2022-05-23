import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddStudent from './AddStudent';
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import '../../assets/style/Group/AddButtons.scss'
function AddButton() {
    return (
        <div className='ms-1 addition'>
            <button type="button" className="btn btn-outline-success group-btn" data-bs-toggle="modal" data-bs-target="#addModal"><AddCircleOutlineOutlinedIcon /></button>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Operations</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body add-buttons-area">
                            <AddStudent/>
                            <AddClassroom/>
                            <AddTeacher/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary group-btn">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddButton

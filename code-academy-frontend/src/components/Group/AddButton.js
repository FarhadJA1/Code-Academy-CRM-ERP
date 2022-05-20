import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddStudent from './AddStudent';
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import '../../assets/style/Group/AddButtons.scss'
function AddButton() {
    return (
        <div className='ms-1'>
            <button type="button" className="btn btn-outline-success group-btn" data-bs-toggle="modal" data-bs-target="#addModal"><AddCircleOutlineOutlinedIcon /></button>

            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title addition-title" id="exampleModalLabel">Operations</h5>
                            <button type="button" class="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body add-buttons-area">
                            <AddStudent/>
                            <AddClassroom/>
                            <AddTeacher/>
                        </div>
                        <div class="modal-footer">
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

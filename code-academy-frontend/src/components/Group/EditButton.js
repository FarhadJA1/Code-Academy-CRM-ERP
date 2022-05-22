import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function EditButton() {
    return (
        <div className='edit-button addition'>
            <button type="button" className="btn btn-outline-warning group-btn" data-bs-toggle="modal" data-bs-target="#editModal"><EditOutlinedIcon /></button>


            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title addition-title" id="exampleModalLabel">Edit Group</h5>
                            <button type="button" class="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
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

export default EditButton

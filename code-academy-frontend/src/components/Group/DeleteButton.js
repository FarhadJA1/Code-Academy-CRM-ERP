import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
function DeleteButton() {
    return (
        <div>
            <button type="button" className="btn btn-outline-danger group-btn mx-2" data-bs-toggle="modal" data-bs-target="#deleteModal"><DeleteOutlineOutlinedIcon /></button>


            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">                            
                            <button type="button" class="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure to permanently delete this group?
                        </div>
                        <div class="modal-footer">
                            <button  type="button" className="btn btn-outline-danger group-btn">Delete</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteButton

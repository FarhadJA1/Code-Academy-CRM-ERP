import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
function ResourceDeleteBtn() {
    return (
        <div>
            <button type="button" className="btn btn-outline-danger resource-button mx-2" data-bs-toggle="modal" data-bs-target="#delete-resource"><DeleteOutlineOutlinedIcon /></button>


            <div class="modal fade" id="delete-resource" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure to permanently delete this resource type?
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-outline-danger resource-button">Delete</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning resource-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceDeleteBtn

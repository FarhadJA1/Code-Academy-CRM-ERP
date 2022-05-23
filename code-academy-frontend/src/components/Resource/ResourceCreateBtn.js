import React from 'react'
import { TextField } from '@mui/material'
function ResourceCreateBtn() {
    return (
        <div className='addition'>
            <div className="my-3 me-3 create-resource-btn-area">
                <button type="button" className="btn btn-outline-success create-resource-btn" data-bs-toggle="modal" data-bs-target="#create-resource">
                    Create Resource Type
                </button>
            </div>

            <div class="modal fade" id="create-resource" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please, enter resource type:</h5>
                            <button type="button" class="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body row">
                            <TextField id="outlined-basic" label="Resource type" variant="outlined" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-outline-primary resource-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning resource-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceCreateBtn

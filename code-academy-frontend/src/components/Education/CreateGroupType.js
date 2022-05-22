import { TextField } from '@mui/material'
import React from 'react'

function CreateGroupType() {
  return (
    <div>
      <div className="my-3 me-3 create-education-btn-area">
        <button type="button" className="btn btn-outline-success create-education-btn" data-bs-toggle="modal" data-bs-target="#createEducation">
          Create Education Type
        </button>
      </div>

      <div class="modal fade" id="createEducation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Please, enter education type:</h5>
              <button type="button" class="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body row">
              <TextField id="outlined-basic" label="Education type" variant="outlined" />
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-outline-primary education-button">Save</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning education-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupType

import React from 'react'
import { TextField } from '@mui/material'
function ClassroomCreateBtn() {
  return (
    <div className='addition'>
    <div className="my-3 me-3 create-classroom-btn-area">
      <button type="button" className="btn btn-outline-success create-classroom-btn" data-bs-toggle="modal" data-bs-target="#create-classroom">
        Create Classroom
      </button>
    </div>
      
    <div className="modal fade" id="create-classroom" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Please, fill the blank:</h5>
            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body row">
            <TextField id="outlined-basic" label="Classroom Name" variant="outlined" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-primary classroom-button">Save</button>
            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning classroom-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ClassroomCreateBtn


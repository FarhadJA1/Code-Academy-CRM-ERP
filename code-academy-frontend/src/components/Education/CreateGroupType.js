import { TextField } from '@mui/material'
import React from 'react'
function CreateGroupType(props) {
  return (
    <div className='addition'>
      <div className="my-3 me-3 create-education-btn-area">
        <button type="button" className="btn btn-outline-success create-education-btn" data-bs-toggle="modal" data-bs-target="#createEducation">
          Create Education Type
        </button>
      </div>

      <div className="modal fade" id="createEducation" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Please, enter education type:</h5>
              <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              <TextField autoComplete='off' onChange={(e) => props.setInput(e.target.value)} value={props.input} id="outlined-basic" label="Education type" variant="outlined" />
            </div>
            <div className="modal-footer">
              <button onClick={() => props.createPayment()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary education-button">Save</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning education-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupType

import React from 'react'
import '../../assets/style/Group/CreateBtn.scss'
function CreateButton() {
  return (
    <div>
      <div className="create-btn-area my-3 me-5">
        <button type="button" className="btn btn-outline-success create-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Create Group
        </button>
      </div>



      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Please, enter group details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Save</button>
              <button type="button" className="btn btn-outline-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateButton

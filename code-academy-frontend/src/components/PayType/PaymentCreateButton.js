import React from 'react'
import { TextField } from '@mui/material'
function PaymentCreateButton() {
  return (
    <div className='addition'>
      <div className="my-3 me-3 create-payment-btn-area">
        <button type="button" className="btn btn-outline-success create-payment-btn" data-bs-toggle="modal" data-bs-target="#create-payment">
          Create Education Type
        </button>
      </div>

      <div class="modal fade" id="create-payment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Please, enter payment option:</h5>
              <button type="button" class="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body row">
              <TextField id="outlined-basic" label="Payment type" variant="outlined" />
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-outline-primary payment-button">Save</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning payment-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentCreateButton

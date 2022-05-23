import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function PaymentEditBtn() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-warning payment-button" data-bs-toggle="modal" data-bs-target="#edit-payment"><EditOutlinedIcon className='settings-button' /></button>


            <div class="modal fade" id="edit-payment" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title addition-title" id="exampleModalLabel">Edit Payment Type</h5>
                            <button type="button" class="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
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

export default PaymentEditBtn

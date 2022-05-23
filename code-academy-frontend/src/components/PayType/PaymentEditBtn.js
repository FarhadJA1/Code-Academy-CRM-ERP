import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function PaymentEditBtn() {
    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-warning payment-button" data-bs-toggle="modal" data-bs-target="#edit-payment"><EditOutlinedIcon className='settings-button' /></button>


            <div className="modal fade" id="edit-payment" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Payment Type</h5>
                            <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
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

import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField,Tooltip } from '@mui/material'
function PaymentEditBtn(props) {
    return (
        <div className='addition'>
            <Tooltip title="Update Payment Option" placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-warning payment-button" data-bs-toggle="modal" data-bs-target={'#edit-payment' + props.id}><EditOutlinedIcon className='settings-button' /></button>
            </Tooltip>

            <div className="modal fade" id={'edit-payment' + props.id} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Edit Payment Type</h5>
                            <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <TextField autoComplete='off' className='resource-input' onChange={(e) => props.setInput(e.target.value)} id="outlined-basic" label={props.name} variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.updatePayment()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary payment-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning payment-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentEditBtn

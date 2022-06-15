import React from 'react'
import { TextField } from '@mui/material'
function FinanceButton() {
    return (
        <div>
            <button type="button" className="btn btn-outline-success finance-create-btn" data-bs-toggle="modal" data-bs-target="#create-finance">
                Create Report
            </button>


            <div className="modal fade" id="create-finance" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Please, fill the blank</h5>
                            <button type="button" className="btn-close finance-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  finance-modal-body">
                            <div>
                                <TextField InputProps={{ inputProps: { min: 0 } }} type='number' id="outlined-basic" label="Income" variant="outlined" />
                            </div>
                            <div>
                                <TextField InputProps={{ inputProps: { min: 0 } }} type='number' id="outlined-basic" label="Expence" variant="outlined" />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary finance-btn" data-bs-dismiss="modal">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning finance-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceButton

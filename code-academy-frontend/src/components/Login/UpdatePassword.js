import React from 'react'
import { TextField } from '@mui/material'
import KeyIcon from '@mui/icons-material/Key';

function UpdatePassword(props) {
    return (
        <div>
            <button type="button" className="btn btn-outline-danger password-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <KeyIcon /> Change Password
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
                            <button type="button" className="btn-close password-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row mt-3'>
                                <TextField
                                    id="outlined-required-1"
                                    label="Password"
                                    type='password'
                                    autoComplete='off'
                                    onChange={(e) => props.setCurrentPassword(e.target.value)}
                                    className='password-input'

                                />
                            </div>
                            <div className="row mt-3">
                                <TextField
                                    id="outlined-required-2"
                                    label="New Password"
                                    type='password'
                                    autoComplete='off'
                                    onChange={(e) => props.setNewPassword(e.target.value)}
                                    className='password-input'
                                />
                            </div>
                            <div className="row mt-3">
                                <TextField
                                    id="outlined-required-3"
                                    label="Confirm New Password"
                                    type='password'
                                    autoComplete='off'
                                    onChange={(e) => props.setConfirmPassword(e.target.value)}
                                    className='password-input'
                                />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button onClick={(e) => props.resetPassword(e)} type="button" className="btn btn-outline-warning password-button" data-bs-dismiss="modal">Change Password</button>
                            <button type="button" className="btn btn-outline-danger password-button" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePassword

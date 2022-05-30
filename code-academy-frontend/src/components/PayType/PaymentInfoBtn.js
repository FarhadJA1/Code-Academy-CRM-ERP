import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
function PaymentInfoBtn(props) {
    let count = 1;
    return (
        <div className='addition'>
            <div className="modal fade" id={'payment-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">Payment Details</h5>
                            <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='addition-title'>Name: {props.pay.name}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary payment-button" data-bs-target={'#payment-student-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">Open Student List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'payment-student-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Student List</h5>
                            <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {props.pay.students.map(student => (
                                    <li>
                                        <span>{count++}</span>
                                        <span>{student.name + " " + student.surname}</span>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#payment-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary payment-button">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title="Payment Details" placement="bottom-end">
                <button onClick={() => props.paymentDetails(props.pay.id)} type="button" className="btn btn-outline-info payment-button" data-bs-toggle="modal" data-bs-target={'#payment-detail' + props.id}><InfoOutlinedIcon /></button>

            </Tooltip>
        </div>
    )
}

export default PaymentInfoBtn

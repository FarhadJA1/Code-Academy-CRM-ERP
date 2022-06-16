import React from "react";
import { TextField } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function StudentCreateBtn(props) {   

    return (
        <div className='create-btn-area'>
            <div className='my-3 me-3'>
                <button type="button" className="btn btn-outline-success create-btn" data-bs-toggle="modal" data-bs-target="#create-student">
                    Create Student
                </button>
            </div>

            <div className="modal fade" id="create-student" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title create-header" id="exampleModalLabel">Please, fill the blank:</h5>
                            <button type="button" className="btn-close student-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container addition">
                            <h6 className='addition-title'>PERSONAL INFO</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField  onChange={(e) => props.setNameInput(e.target.value)} value={props.nameInput} className='student-input' id="outlined-basic" label="Name" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField  onChange={(e) => props.setSurnameInput(e.target.value)} value={props.surnameInput} autoComplete="off" className='student-input' id="outlined-basic" label="Surname" variant="outlined" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <DatePicker
                                        selected={props.birthdayInput}
                                        onChange={date => props.setBirthdayInput(date)}
                                        className="student-birthday"
                                        dateFormat='dd/MM/yyyy'
                                        maxDate={new Date()}
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        placeholderText="Birthday"
                                    />
                                </div>
                            </div>
                            <h6 className='mt-4 addition-title'>CONTACT</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField autoComplete='off' onChange={(e) => props.setEmailInput(e.target.value)} value={props.emailInput} type='email' className='student-input' id="outlined-basic" label="Email" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField autoComplete='off' type='number' onChange={(e) => props.setPhoneInput(e.target.value)} value={props.phoneInput} className='student-input' id="outlined-basic" label="Phone" variant="outlined" />
                                </div>
                            </div>

                            <h6 className="mt-4 addition-title">EDUCATIONAL</h6>
                            <div className="row">
                                <div className="col-6">
                                    <Box sx={{ width: 210 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Payment</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={props.paymentInput}
                                                label="Payment"
                                                onChange={(e)=>props.setPaymentInput(e.target.value)}
                                                defaultValue = ""
                                            >
                                                {props.payments.map(payment => (
                                                <MenuItem key={payment.id} value={payment.id}>{payment.name}</MenuItem>                                                
                                                ))}

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="col-6">
                                    <Box sx={{ width: 210 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Resource</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={props.resourceInput}
                                                label="Resource"
                                                onChange={(e)=>props.setResourceInput(e.target.value)}
                                                defaultValue = ""
                                                
                                            >
                                                {props.resources.map(res=>(
                                                    <MenuItem key={res.id} value={res.id}>{res.name}</MenuItem>
                                                ))}
                                                
                                               
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => props.createStudent()} data-bs-dismiss="modal" className="btn btn-outline-primary student-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning student-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCreateBtn

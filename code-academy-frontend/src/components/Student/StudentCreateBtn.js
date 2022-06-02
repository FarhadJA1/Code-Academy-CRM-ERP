import React, { useState } from "react";
import { TextField } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function StudentCreateBtn() {
    const [birthday, setBirthday] = useState(null);
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
                                    <TextField className='student-input' id="outlined-basic" label="Name" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField autoComplete="off" className='student-input' id="outlined-basic" label="Surname" variant="outlined" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                <DatePicker
                                 selected={birthday} 
                                 onChange={date => setBirthday(date)} 
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
                            <h6 className='my-2 addition-title'>Contact</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField className='student-input' id="outlined-basic" label="Email" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField className='student-input' id="outlined-basic" label="Phone" variant="outlined" />
                                </div>
                            </div>                           
                            
                            <h6 className="my-2 addition-title">Educational</h6>

                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary student-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning student-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCreateBtn

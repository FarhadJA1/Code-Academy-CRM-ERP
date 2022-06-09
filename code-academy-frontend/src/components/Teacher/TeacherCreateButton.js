import React from 'react'
import { TextField } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function TeacherCreateButton(props) {
    return (
        <div className='create-btn-area'>
            <div className='my-3 me-3'>
                <button type="button" className="btn btn-outline-success create-btn" data-bs-toggle="modal" data-bs-target="#create-teacher">
                    Create Teacher
                </button>
            </div>

            <div className="modal fade" id="create-teacher" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title create-header" id="exampleModalLabel">Please, fill the blank:</h5>
                            <button type="button" className="btn-close teacher-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container addition">
                            <h6 className='addition-title'>PERSONAL INFO</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField onChange={(e) => props.setNameInput(e.target.value)} value={props.nameInput} className='teacher-input' id="outlined-basic" label="Name" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField onChange={(e) => props.setSurnameInput(e.target.value)} value={props.surnameInput} autoComplete="off" className='teacher-input' id="outlined-basic" label="Surname" variant="outlined" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <DatePicker
                                        selected={props.birthdayInput}
                                        onChange={date => props.setBirthdayInput(date)}
                                        className="teacher-birthday"
                                        dateFormat='dd/MM/yyyy'
                                        maxDate={new Date()}
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        placeholderText="Birthday"
                                    />
                                </div>
                                <div className="col-6 mt-3">
                                    <TextField type='number' onChange={(e) => props.setSalaryInput(e.target.value)} value={props.salaryInput} className='teacher-input' id="outlined-basic" label="Salary" variant="outlined" />
                                </div>

                            </div>
                            <h6 className='mt-4 addition-title'>CONTACT</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField onChange={(e) => props.setEmailInput(e.target.value)} value={props.emailInput} type='email' className='teacher-input' id="outlined-basic" label="Email" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField type='number' onChange={(e) => props.setPhoneInput(e.target.value)} value={props.phoneInput} className='teacher-input' id="outlined-basic" label="Phone" variant="outlined" />
                                </div>
                            </div>
                            <h6 className='addition-title mt-4'>QUALIFICATION</h6>
                            <div className='row'>
                                <Box sx={{ width: 0.98 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Profession</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={props.professionInput}
                                            label="Profession"
                                            onChange={(e) => props.setProfessionInput(e.target.value)}
                                            defaultValue=""

                                        >
                                            {props.professions.map(pro => (
                                                <MenuItem key={pro.id} value={pro.id}>{pro.name}</MenuItem>
                                            ))}


                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.createTeacher()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary teacher-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning teacher-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherCreateButton

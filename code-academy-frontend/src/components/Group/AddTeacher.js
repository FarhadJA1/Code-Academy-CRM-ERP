import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddTeacher(props) {
    return (
        <div className='row addition'>
            <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-success group-btn" data-bs-toggle="modal" data-bs-target={'#add-teacher' + props.id}>Add Teacher</button>

            <div className="modal fade" id={'add-teacher' + props.value} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">                            
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Select Teacher:</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Box sx={{ width: 1 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Teachers</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={props.teacherInput}
                                        label="Teachers"
                                        onChange={(e) => props.setTeacherInput(e.target.value)}
                                        defaultValue=""
                                    >
                                        {props.teachers.map(teacher=>(
                                                    <MenuItem key={teacher.id} value={teacher.id}>{teacher.name} {teacher.surname} - {teacher.profession.name}</MenuItem>
                                                ))}                                               

                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary group-btn">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeacher

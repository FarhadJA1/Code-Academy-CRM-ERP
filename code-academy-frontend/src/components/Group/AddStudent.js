import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function AddStudent(props) {
    
    return (
        <div className='row addition'>
            <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-success group-btn add-button" data-bs-toggle="modal" data-bs-target={'#add-student' + props.id}>Add Student</button>


            <div className="modal fade" id={'add-student' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Add Student</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Autocomplete
                                value={props.studentsInput}
                                onChange={(e) => props.setStudentsInput(e.target.value)}
                                multiple
                                limitTags={2}
                                id="multiple-limit-tags"
                                options={props.students}
                                getOptionLabel={option => (option.name + " " + option.surname) ? (option.name + " " + option.surname) : ''}
                                renderInput={(params) => (
                                    <TextField {...params} label="Students" placeholder="select student" />
                                )}
                                sx={{ width: '1' }}
                            />
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

export default AddStudent

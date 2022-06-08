import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddStudent from './AddStudent';
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import { Tooltip } from '@mui/material';
import '../../assets/style/Group/AddButtons.scss'
function AddButton(props) {
    return (
        <div className='ms-1 addition'>
            <Tooltip title="Operations" placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-success group-btn" data-bs-toggle="modal" data-bs-target={'#add-button' + props.id}><AddCircleOutlineOutlinedIcon /></button>
            </Tooltip>
            <div className="modal fade" id={'add-button' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Operations</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body add-buttons-area">
                            <AddStudent 
                            setId={props.setId} id={props.id} value={props.value}
                            students={props.students} setStudents={props.setStudents}
                            studentsInput={props.studentsInput} setStudentsInput={props.setStudentsInput}
                            />
                            <AddClassroom 
                            setId={props.setId} id={props.id} value={props.value}
                            classrooms={props.classrooms} setClassrooms={props.setClassrooms}
                            classroomInput={props.classroomInput} setClassroomInput={props.setClassroomInput}
                            />                            
                            <AddTeacher 
                            setId={props.setId} id={props.id} value={props.value}
                            teachers={props.teachers} setTeachers={props.setTeachers}
                            teacherInput={props.teacherInput} setTeacherInput={props.setTeacherInput}
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

export default AddButton


import React from 'react';

import '../../assets/style/Group/GroupTable.scss'
import InfoButton from './InfoButton';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

function GroupTable(props) {
  let count = 1
  return (

    <table className="table table-hover">
      <thead>
        <tr>
          <th className='table-header' scope="col">#</th>
          <th className='table-header' scope="col">Group Code</th>
          <th className='table-header' scope="col">Start Date</th>
          <th className='table-header' scope="col">Expire Date</th>
          <th className='table-header' scope="col">Teacher</th>
          <th className='table-header' scope="col">Classroom</th>
          <th className='table-header' scope="col">Students (total)</th>
          <th className='table-header' scope="col">Settings</th>
        </tr>
      </thead>
      <tbody>
        {props.groups.map(group => (
          <tr key={group.id}>
            <th className='table-header' align='center' scope="row">{count++}</th>
            <td className='table-header' align='center'>{group.groupCode}</td>
            <td className='table-header' align='center'>{group.createDate.substring(0,10).split("-").reverse().join("-")}</td>
            <td className='table-header' align='center'>{group.expireDate.substring(0,10).split("-").reverse().join("-")}</td>

            
            {(group.teacher == null) ? (
              <td className='group-code table-header' align='center'>No teacher has been assigned.</td>
            ) : (<td className='table-header' align='center'>{group.teacher.name} {group.teacher.surname}</td>)
            }
            {(group.groupClassTerm.classroom == null) ? (
              <td className='group-code table-header' align='center'>No classroom has been assigned.</td>
            ) : (<td className='table-header' align='center'>{group.groupClassTerm.classroom.name}</td>)
            }
            <td className='table-header' align='center'>{group.students.length}</td>
            <th className='table-button-area' scope="col">
              <InfoButton />
              <DeleteButton id={props.id} value={group.id} setId={props.setId} deleteGroup={props.deleteGroup}/>              
              <AddButton 
              setId={props.setId} id={props.id} value={group.id}
              classrooms={props.classrooms} setClassrooms={props.setClassrooms}
              teachers={props.teachers} setTeachers={props.setTeachers}
              students={props.students} setStudents={props.setStudents}
              studentsInput={props.studentsInput} setStudentsInput={props.setStudentsInput}
              classroomInput={props.classroomInput} setClassroomInput={props.setClassroomInput}
              teacherInput={props.teacherInput} setTeacherInput={props.setTeacherInput}
              addStudents={props.addStudents}
              addTeacher={props.addTeacher} addClassroom={props.addClassroom}
              />
            </th>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default GroupTable

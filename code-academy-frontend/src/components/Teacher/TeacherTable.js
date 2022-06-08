import React from 'react'
import TeacherDelete from './TeacherDelete'
import TeacherEdit from './TeacherEdit'
import TeacherInfo from './TeacherInfo'


function TeacherTable(props) {
  let count = 1;
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className='table-header' scope="col">#</th>
            <th className='table-header' scope="col">Name</th>
            <th className='table-header' scope="col">Surname</th>
            <th className='table-header' scope="col">Profession</th>
            <th className='table-header' scope="col">Salary</th>
            <th className='table-header' scope="col">Phone</th>
            <th className='table-header' scope="col">Settings</th>
          </tr>
        </thead>
        <tbody>
          {props.teachers.map(teacher => (
            <tr>
              <th className='table-header' scope="row">{count++}</th>
              <td className='table-header' align='center'>{teacher.name}</td>
              <td className='table-header' align='center'>{teacher.surname}</td>
              <td className='table-header' align='center'>{teacher.profession.name}</td>
              <td className='table-header' align='center'>{teacher.salary}</td>
              <td className='table-header' align='center'>{teacher.phone}</td>
              <td className='table-button-area' align='center'>
                <TeacherInfo />
                <TeacherDelete id={props.id} value={teacher.id} setId={props.setId} deleteTeacher={props.deleteTeacher} />
                <TeacherEdit
                  nameInput={props.nameInput} setNameInput={props.setNameInput}
                  surnameInput={props.surnameInput} setSurnameInput={props.setSurnameInput}
                  birthdayInput={props.birthdayInput} setBirthdayInput={props.setBirthdayInput}
                  emailInput={props.emailInput} setEmailInput={props.setEmailInput}
                  phoneInput={props.phoneInput} setPhoneInput={props.setPhoneInput}
                  salaryInput={props.salaryInput} setSalaryInput={props.setSalaryInput}
                  professionInput={props.professionInput} setProfessionInput={props.setProfessionInput}
                  professions={props.professions}
                  updateTeacher={props.updateTeacher}
                  id={props.id} value={teacher.id} setId={props.setId}
                />
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default TeacherTable

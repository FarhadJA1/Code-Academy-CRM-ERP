import React from 'react'
import '../assets/style/Student/Student.scss'
import StudentCreateBtn from '../components/Student/StudentCreateBtn'
import StudentsTable from '../components/Student/StudentsTable'
function Students() {
  return (
    <div className='student'>
      <StudentCreateBtn/>
      <StudentsTable/>
    </div>
  )
}

export default Students

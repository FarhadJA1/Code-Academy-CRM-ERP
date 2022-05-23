import React from 'react'
import '../assets/style/Classroom/Classroom.scss'
import ClassroomCreateBtn from '../components/Classroom/ClassroomCreateBtn'
import ClassroomTable from '../components/Classroom/ClassroomTable'
function Classroom() {
  return (
    <div className='classroom'>
      <ClassroomCreateBtn/>
      <ClassroomTable/>
    </div>
  )
}

export default Classroom

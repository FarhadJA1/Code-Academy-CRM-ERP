import React from 'react'
import '../assets/style/Teacher/Teacher.scss'
import TeacherCreateButton from '../components/Teacher/TeacherCreateButton'
import TeacherTable from '../components/Teacher/TeacherTable'
function Teacher() {
    return (
        <div className='teacher'>
            <TeacherCreateButton />
            <TeacherTable />
        </div>
    )
}

export default Teacher

import React from 'react'
import '../assets/style/Education/Education.scss'
import CreateGroupType from '../components/Education/CreateGroupType'
import EducationTable from '../components/Education/EducationTable'
function Education() {
    return (
        <div className='education'>
            <CreateGroupType />
            <EducationTable />
        </div>
    )
}

export default Education

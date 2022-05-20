import React from 'react'
import { Link } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
import '../../assets/style/Navigation/Operations.scss'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
function Operations() {
  return (
    <div className='container nav-operations'>
      <div className="row mt-3">
        <h6 className='nav-title'>OPERATIONS</h6>
        <Link className='nav-link' to={'/groups'}>
          <GroupsIcon className='nav-icon' />
          <span>Groups</span>
        </Link>
        <Link className='nav-link' to={'/education'}>
          <SchoolOutlinedIcon className='nav-icon' />
          <span>Education</span>
        </Link>

      </div>
    </div>
  )
}

export default Operations

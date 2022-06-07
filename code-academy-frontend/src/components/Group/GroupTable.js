
import React from 'react';

import '../../assets/style/Group/GroupTable.scss'
import InfoButton from './InfoButton';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
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
          <th className='table-header' scope="col">Students (total)</th>
          <th className='table-header' scope="col">Settings</th>
        </tr>
      </thead>
      <tbody>
        {props.groups.map(group => (
          <tr>
            <th className='table-header' align='center' scope="row">{count++}</th>
            <td className='table-header' align='center'>{group.groupCode}</td>
            <td className='table-header' align='center'>{group.createDate}</td>
            <td className='table-header' align='center'>{group.expireDate}</td>

            
            {(group.teacher == null) ? (
              <td className='group-code table-header' align='center'>No teacher has been assigned.</td>
            ) : (<td className='table-header' align='center'>{group.teacher.name} {group.teacher.surname}</td>)
            }
            <td className='table-header' align='center'>{group.students.length}</td>
            <th className='table-button-area' scope="col">
              <InfoButton />
              <DeleteButton id={props.id} value={group.id} setId={props.setId} deleteGroup={props.deleteGroup}/>
              <EditButton />
              <AddButton />
            </th>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default GroupTable

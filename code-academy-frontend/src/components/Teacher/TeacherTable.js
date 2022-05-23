import React from 'react'
import TeacherDelete from './TeacherDelete'
import TeacherEdit from './TeacherEdit'
import TeacherInfo from './TeacherInfo'


function TeacherTable() {
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th className='table-header' scope="col">#</th>
            <th className='table-header' scope="col">Name</th>
            <th className='table-header' scope="col">Surname</th>
            <th className='table-header' scope="col">salary</th>
            <th className='table-header' scope="col">Phone</th>
            <th className='table-header' scope="col">Settings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='table-header' scope="row">1</th>
            <td align='center'>Mark</td>
            <td align='center'>Otto</td>
            <td align='center'>@mdo</td>
            <td align='center'>@mdo</td>
            <td className='table-header table-button-area' align='center'>
              <TeacherInfo />
              <TeacherDelete />
              <TeacherEdit />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TeacherTable

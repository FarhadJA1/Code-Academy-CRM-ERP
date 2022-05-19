import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import '../../assets/style/Group/GroupTable.scss'



function GroupTable() {

  async function GetDatas() {
    const response = await axios.get("https://localhost:44380/api/Group/GetAll")
      .catch(error => console.log(error));
    setGroups(response.data);
  }
 

  const [groups, setGroups] = useState([]);
  let count = 1
  useEffect(() => {
    GetDatas();
  }, []);

  



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
      <tbody >
        {groups.map(group => (
          <tr key={group.id}>
            <th align='center' scope="row">{count++}</th>
            <td align='center'>{group.groupCode}</td>
            <td align='center'>{group.createDate}</td>
            <td align='center'>{group.expireDate}</td>
            <td align='center'>{group.teacher}</td>
            <td align='center'>{group.students.length}</td>
            <th className='table-header table-button-area' scope="col">
              <button type="button" className="btn btn-outline-info group-btn"><InfoOutlinedIcon /></button>
              <button type="button" className="btn btn-outline-danger group-btn mx-2"><DeleteOutlineOutlinedIcon /></button>
              <button type="button" className="btn btn-outline-warning group-btn"><EditOutlinedIcon /></button>
              <button type="button" className="btn btn-outline-success group-btn ms-2"><AddCircleOutlineOutlinedIcon /></button>
            </th>
          </tr>

        ))}

      </tbody>
    </table>

  )

}

export default GroupTable

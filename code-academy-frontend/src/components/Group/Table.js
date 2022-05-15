import { React, useState, useEffect } from 'react'
import axios from 'axios'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import '../../assets/style/Group/Table.scss'


function openButton() {
  
}

function Table() {
  const [groups, setGroups] = useState([]);
  const [isOpen,setIsOpen] =useState(false)
  let count = 1
    useEffect(() => {
    axios
      .get("https://localhost:44380/api/Group/GetAll")
      .then(data => {
        setGroups(data.data)
      })
      .catch(error => console.log(error));   

  });
    return (
    <div className='group-table'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Group Code</th>
            <th scope="col">Operations</th>
            <th scope="col">Settings</th>
          </tr>
        </thead>
        <tbody>
          {
           
            groups.map(              
              group => (
                
                <tr>
                  
                  <th scope="row"> {count++}</th>
                  <td>{group.groupCode}</td>
                  <td>
                    <button type="button" className="btn btn-outline-success group-add">Add Student</button>
                    <button type="button" className="btn btn-outline-success group-add">Add to Room</button>
                    <button type="button" className="btn btn-outline-success group-add">Add Teacher</button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-outline-info group-btn"><InfoOutlinedIcon /></button>
                    <button type="button" className="btn btn-outline-danger group-btn"><DeleteOutlineOutlinedIcon /></button>
                    <button type="button" className="btn btn-outline-warning group-btn"><EditOutlinedIcon /></button>
                    
                  </td>
                </tr>

              ),

            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table





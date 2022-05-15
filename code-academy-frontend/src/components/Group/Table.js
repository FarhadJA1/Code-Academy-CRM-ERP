import { React, useState, useEffect } from 'react'
import axios from 'axios'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function Table() {
  const [groups, setGroups] = useState([]);
  let count = 1;
  useEffect(() => {
    axios
      .get("https://localhost:44380/api/Group/GetAll")
      .then(data => {
        setGroups(data.data)
      })
      .catch(error => console.log(error));

  });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Group Code</th>
            <th scope="col">Settings</th>
          </tr>
        </thead>
        <tbody>
          {
            groups.map(

              group => (
                <tr>
                  <th scope="row">{count}</th>
                  <td>{group.groupCode}</td>
                  <td>
                  <button type="button" class="btn btn-outline-info">Info</button>
                  <button type="button" class="btn btn-outline-danger"><DeleteOutlineOutlinedIcon/></button>
                  <button type="button" class="btn btn-outline-warning"><EditOutlinedIcon/></button>                  
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




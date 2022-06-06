import React from 'react';
import CreateButton from '../components/Group/CreateButton';
import GroupTable from '../components/Group/GroupTable';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Group() {  
  const [groups, setGroups] = useState([]);

  async function GetDatas() {
    const response = await axios.get("https://localhost:44380/api/Group/GetAll")
      .catch(error => console.log(error));
    setGroups(response.data);
  }
  useEffect(() => {
    GetDatas();
  }, []);
  return (
    <div>
      <CreateButton/>
      <GroupTable 
      groups={groups}
      />
    </div>
  )
}

export default Group

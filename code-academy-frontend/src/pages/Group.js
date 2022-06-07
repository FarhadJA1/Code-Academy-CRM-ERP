import React from 'react';
import CreateButton from '../components/Group/CreateButton';
import GroupTable from '../components/Group/GroupTable';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Group() {
  const url = "https://localhost:44380"
  const [groups, setGroups] = useState([]);

  const [educationInput, setEducationInput] = useState();
  const [capacityInput, setCapacityInput] = useState();
  const [createDateInput, setCreateDateInput] = useState();
  const [termInput, setTermInput] = useState();
  const [groupTypeNameInput,setGroupTypeNameInput] = useState();
  const [id, setId] = useState();

  const [hours, setHours] = useState([]);
  const [education, setEducation] = useState([]);

  async function GetGroups() {
    const response = await axios.get("https://localhost:44380/api/Group/GetAll")
      .catch(error => console.log(error));
    setGroups(response.data);
    console.log(response.data);
  }

  async function GetHours() {
    await axios.get(`${url}/api/Hour/GetAll`)
      .then(res => {
        setHours(res.data);        
      })
  }
  async function GetEducations() {
    await axios.get(`${url}/api/Education/GetAll`)
      .then(res => {
        setEducation(res.data);        
      })
  }
  useEffect(() => {
    GetGroups();
    GetHours();
    GetEducations();
  }, []);
  async function CreateGroup() {    
    await axios.post(`${url}/api/Group/CreateGroup`, {
      groupTypeId: educationInput,
      capacity: capacityInput,
      createDate: createDateInput,
      termId: termInput,
      groupTypeName:groupTypeNameInput
    })
      .then(res => {
        GetGroups();
        GetHours();
        GetEducations();
        setCapacityInput("");
        setCreateDateInput("");
        setEducationInput("");
        setTermInput("");
      })
      .catch(error => console.log(error));
  }
  const DeleteGroup = () => {
    axios.get(`${url}/api/Group/DeleteGroup/${id}`)
      .then(res => {
        GetGroups();
      })
      .catch(error => console.log(error));
  }


  return (
    <div>
      <CreateButton
        educationInput={educationInput} setEducationInput={setEducationInput}
        capacityInput={capacityInput} setCapacityInput={setCapacityInput}
        createDateInput={createDateInput} setCreateDateInput={setCreateDateInput}
        termInput={termInput} setTermInput={setTermInput} hours={hours} education={education}
        setEducation={setEducation} setHours={setHours}
        groupTypeNameInput={groupTypeNameInput} setGroupTypeNameInput={setGroupTypeNameInput}
        createGroup={CreateGroup}
      />
      <GroupTable
        groups={groups} setId={setId} id={id}
        deleteGroup={DeleteGroup}
      />
    </div>
  )
}

export default Group

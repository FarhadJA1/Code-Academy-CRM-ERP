import React from 'react'
import '../assets/style/Classroom/Classroom.scss'
import ClassroomCreateBtn from '../components/Classroom/ClassroomCreateBtn'
import ClassroomTable from '../components/Classroom/ClassroomTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
function Classroom() {
  const url = "https://localhost:44380/"
  const [classrooms, setClassroom] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [capacityInput, setCapacityInput] = useState();
  const [id, setId] = useState();
  const [details, setDetails] = useState();

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const Reject = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  async function GetDatas() {
    await axios.get(`${url}api/Classroom/GetAll`)
      .then(res => {
        setClassroom(res.data);
      })
  }


  useEffect(() => {
    GetDatas();
  }, [])

  async function CreateClassroom() {
    await axios.post(`${url}api/Classroom/CreateClassroom`, {
      name: nameInput,
      capacity: capacityInput
    })
      .then(res => {
        GetDatas();
        setNameInput("");
        setCapacityInput("");
        Success.fire({
          icon: 'success',
          title: 'Classroom successfully created'
        })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
        })
      );
  }
  const DeleteClassroom = () => {
    axios.get(`${url}api/Classroom/DeleteClassroom/${id}`)
      .then(res => {
        GetDatas();
        Success.fire({
          icon: 'warning',
          title: 'Classroom successfully deleted'
        })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
        })
      );
  }
  async function UpdateClassroom() {
    await axios.put(`${url}api/Classroom/UpdateClassroom/${id}`, {
      name: nameInput,
      capacity: capacityInput
    })
      .then(res => {
        GetDatas();
        setNameInput("");
        setCapacityInput("");
        Success.fire({
          icon: 'success',
          title: 'Classroom successfully updated'
        })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
        })
      );
  }
  async function ClassroomDetails(id) {
    await axios.get(`${url}api/Classroom/ResourceClassroom/${id}`)
      .then(res => {
        setDetails(res.data);
      })
  }
  return (
    <div className='classroom'>
      <ClassroomCreateBtn nameInput={nameInput} setNameInput={setNameInput} capacityInput={capacityInput} setCapacityInput={setCapacityInput} createClassroom={CreateClassroom} />
      <ClassroomTable classroomDetails={ClassroomDetails} details={details} nameInput={nameInput} setNameInput={setNameInput} capacityInput={capacityInput} setCapacityInput={setCapacityInput} classrooms={classrooms} id={id} setId={setId} deleteClassroom={DeleteClassroom} updateClassroom={UpdateClassroom} />
    </div>
  )
}

export default Classroom

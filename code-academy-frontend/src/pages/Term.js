import React from 'react'
import TermTable from '../components/Term/TermTable'
import '../assets/style/Term/Term.scss'
import TermCreateBtn from '../components/Term/TermCreateBtn'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
function Term() {
  const url = "https://localhost:44380/"
  const [hours, setHours] = useState([]);
  const [dayInput, setDayInput] = useState();
  const [timeInput, setTimeInput] = useState();
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
    await axios.get(`${url}api/Hour/GetAll`)
      .then(res => {
        setHours(res.data);        
      })
  }
  
  useEffect(() => {
    GetDatas();
  }, [])
  async function CreateHour() {
    await axios.post(`${url}api/Hour/CreateHour`, {
      day: dayInput,
      time: timeInput
    })
      .then(res => {
        GetDatas();
        setDayInput("");
        setTimeInput("");
        Success.fire({
          icon: 'success',
          title: 'Lesson Hour successfully created'
        })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
        })
      );
  }
  const DeleteHour = () => {
    axios.get(`${url}api/Hour/DeleteHour/${id}`)
      .then(res => {
        GetDatas();
        Success.fire({
          icon: 'warning',
          title: 'Lesson Hour successfully deleted'
        })
      })
      .catch(
        Reject.fire({
        icon: 'error',
        title: 'Something went wrong'
      }));
  }
  async function UpdateHour() {
    await axios.put(`${url}api/Hour/UpdateHour/${id}`, {
      day: dayInput,
      time: timeInput
    })
      .then(res => {
        GetDatas();
        setDayInput("");
        setTimeInput("");
        Success.fire({
          icon: 'success',
          title: 'Lesson Hour successfully updated'
        })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
        })
      );
  }
  async function HourDetails(id) {
    await axios.get(`${url}api/Hour/HourDetails/${id}`)
      .then(res => {
        setDetails(res.data);
      })
  }
  return (
    <div className='term'>
      <TermCreateBtn timeInput ={timeInput} setTimeInput={setTimeInput} dayInput={dayInput} setDayInput={setDayInput} createHour={CreateHour}/>
      <TermTable hourDetails={HourDetails} details={details} setTimeInput={setTimeInput} setDayInput={setDayInput} hours={hours} setId={setId} deleteHour={DeleteHour} updateHour={UpdateHour} id={id}/>
    </div>
  )
}

export default Term

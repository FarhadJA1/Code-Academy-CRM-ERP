import React from 'react'
import EmployeeCreateBtn from '../components/Employee/EmployeeCreateBtn'
import '../assets/style/Employee/Employee.scss'
import EmployeeTable from '../components/Employee/EmployeeTable'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
function Employee() {
  const url = "https://localhost:44380"
  const [employees, setEmployees] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [surnameInput, setSurnameInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState();

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

  async function GetEmployees() {
    const response = await axios.get(`${url}/api/Account/GetAll`)
      .catch(error => console.log(error));
    setEmployees(response.data);
  }
  useEffect(() => {
    GetEmployees();
  }, []);

  async function CreateEmployee() {
    await axios.post(`${url}/api/Account/Register`, {
      name: nameInput,
      surname: surnameInput,
      phoneNumber: phoneInput,
      email: emailInput
    })
      .then(res => {
        GetEmployees();
        setEmailInput("");
        setNameInput("");
        setPhoneInput();
        setSurnameInput("");
        Success.fire({
          icon: 'success',
          title: 'Employee successfully hired'
      })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
      })
      );
  }

  return (
    <div className='employee'>
      <EmployeeCreateBtn
        nameInput={nameInput} setNameInput={setNameInput}
        surnameInput={surnameInput} setSurnameInput={setSurnameInput}
        phoneInput={phoneInput} setPhoneInput={setPhoneInput}
        emailInput={emailInput} setEmailInput={setEmailInput}
        CreateEmployee={CreateEmployee}
      />
      <EmployeeTable employees={employees} />
    </div>
  )
}

export default Employee

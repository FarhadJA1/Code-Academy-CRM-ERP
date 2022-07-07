import React from 'react'
import '../assets/style/Student/Student.scss'
import StudentCreateBtn from '../components/Student/StudentCreateBtn'
import StudentsTable from '../components/Student/StudentsTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import StudentSearch from '../components/Student/StudentSearch';
function Students() {
  const url = "https://localhost:44380"

  const [students, setStudents] = useState([]);

  const [nameInput, setNameInput] = useState();
  const [surnameInput, setSurnameInput] = useState();
  const [birthdayInput, setBirthdayInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [paymentInput, setPaymentInput] = useState();
  const [resourceInput, setResourceInput] = useState();
  const [details, setDetails] = useState();


  const [payment, setPayment] = useState([]);
  const [resources, setResources] = useState([]);
  const [id, setId] = useState();
  const [search, setSearch] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState();
  const pageLimit = 3;
  let viewCount = ((currentPage - 1) * pageLimit);
  const length = total / pageLimit;

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
  async function Search(data) {    
      await axios.get(`${url}/api/Student/Search`, {
        params: {
          search: data
        }
      })
        .then(res => {
          setSearch(res.data);
        });
  }

  async function GetStudents() {
    await axios.get(`${url}/api/Student/GetAll`)
      .then(res => {
        setStudents(res.data);
        setTotal(res.data.length)
      })
  }
  async function GetResources() {
    await axios.get(`${url}/api/Resource/GetAll`)
      .then(res => {
        setResources(res.data);
      })
  }
  async function GetPayments() {
    await axios.get(`${url}/api/PayType/GetAll`)
      .then(res => {
        setPayment(res.data);
      })
  }
  useEffect(() => {
    GetStudents();
    GetResources();
    GetPayments();

  }, [])

  async function CreateStudent() {
    await axios.post(`${url}/api/Student/CreateStudent`, {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      birthday: birthdayInput,
      phone: phoneInput,
      payTypeId: paymentInput,
      resourceId: resourceInput
    })
      .then(res => {
        GetStudents();
        GetResources();
        GetPayments();
        setNameInput("");
        setSurnameInput("");
        setBirthdayInput("");
        setPhoneInput("");
        setEmailInput("");
        setResourceInput("");
        Success.fire({
          icon: 'success',
          title: 'Student successfully created'
        })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
        })
      );
  }

  const DeleteStudent = () => {
    axios.get(`${url}/api/Student/DeleteStudent/${id}`)
      .then(res => {
        GetStudents();
        Success.fire({
          icon: 'warning',
          title: 'Student successfully deleted'
        })
      })
      .catch(
        Reject.fire({
          icon: 'error',
          title: 'Something went wrong'
        })
      );
  }
  async function StudentDetails(id) {
debugger
    await axios.get(`${url}/api/Student/StudentDetails/${id}`)
      .then(res => {
        setDetails(res.data);
      })
  }


  async function UpdateStudent() {
    await axios.put(`${url}/api/Student/UpdateStudent/${id}`, {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      birthday: birthdayInput,
      phone: phoneInput,
      payTypeId: paymentInput,
      resourceId: resourceInput
    })
      .then(res => {
        GetStudents();
        GetResources();
        GetPayments();
        setNameInput("");
        setSurnameInput("");
        setBirthdayInput("");
        setPhoneInput("");
        setEmailInput("");
        setResourceInput("");
        setPaymentInput("")
        Success.fire({
          icon: 'success',
          title: 'Student successfully updated'
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
    <div className='student'>
      <div className='page-header'>
        <StudentSearch search={Search}/>
        <StudentCreateBtn
          nameInput={nameInput} setNameInput={setNameInput}
          surnameInput={surnameInput} setSurnameInput={setSurnameInput}
          birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
          paymentInput={paymentInput} setPaymentInput={setPaymentInput}
          resourceInput={resourceInput} setResourceInput={setResourceInput}
          emailInput={emailInput} setEmailInput={setEmailInput}
          phoneInput={phoneInput} setPhoneInput={setPhoneInput}
          payments={payment} setPayment={setPayment}
          resources={resources} setResources={setResources}
          createStudent={CreateStudent}
        />
      </div>


      <StudentsTable students={students}
        nameInput={nameInput} setNameInput={setNameInput}
        surnameInput={surnameInput} setSurnameInput={setSurnameInput}
        birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
        paymentInput={paymentInput} setPaymentInput={setPaymentInput}
        resourceInput={resourceInput} setResourceInput={setResourceInput}
        emailInput={emailInput} setEmailInput={setEmailInput}
        phoneInput={phoneInput} setPhoneInput={setPhoneInput}
        payments={payment} setPayment={setPayment}
        resources={resources} setResources={setResources}
        deleteStudent={DeleteStudent}
        updateStudent={UpdateStudent}
        setId={setId} id={id}
        details={details} setDetails={setDetails}
        studentDetails={StudentDetails}
        currentPage={currentPage} setCurrentPage={setCurrentPage}
        total={total} setTotal={setTotal} pageLimit={pageLimit} viewCount={viewCount}
        length={length}
        search={search}
      />
    </div>
  )
}

export default Students

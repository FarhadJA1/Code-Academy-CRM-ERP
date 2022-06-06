import React from 'react'
import '../assets/style/Teacher/Teacher.scss'
import TeacherCreateButton from '../components/Teacher/TeacherCreateButton'
import TeacherTable from '../components/Teacher/TeacherTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Teacher() {
    const url = "https://localhost:44380"

    const [teachers, setTeachers] = useState([]);

    const [nameInput, setNameInput] = useState();
    const [surnameInput, setSurnameInput] = useState();
    const [birthdayInput, setBirthdayInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [phoneInput, setPhoneInput] = useState();
    const [salaryInput, setSalaryInput] = useState();

    const [id, setId] = useState();

    async function GetTeachers() {
        await axios.get(`${url}/api/Teacher/GetAll`)
            .then(res => {
                setTeachers(res.data);
            })
    }
    useEffect(() => {
        GetTeachers();
    }, [])

    async function CreateTeacher() {
        await axios.post(`${url}/api/Teacher/CreateTeacher`, {
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            birthday: birthdayInput,
            phone: phoneInput,
            salary: salaryInput,
        })
            .then(res => {
                GetTeachers();
                setNameInput("");
                setSurnameInput("");
                setBirthdayInput("");
                setPhoneInput("");
                setEmailInput("");
                setSalaryInput("");
            })
            .catch(error => console.log(error));
    }
    const DeleteTeacher = () => {
        debugger
        axios.get(`${url}/api/Teacher/DeleteTeacher/${id}`)
            .then(res => {
                GetTeachers();
            })
            .catch(error => console.log(error));
    }

    async function UpdateTeacher() {
        debugger
        await axios.put(`${url}/api/Teacher/UpdateTeacher/${id}`, {
            
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            birthday: birthdayInput,
            phone: phoneInput,
            salary: salaryInput,
        })
            .then(res => {
                GetTeachers();
                setNameInput("");
                setSurnameInput("");
                setBirthdayInput("");
                setPhoneInput("");
                setEmailInput("");
                setSalaryInput("");
            })
            .catch(error => console.log(error));
    }


    return (
        <div className='teacher'>
            <TeacherCreateButton
                nameInput={nameInput} setNameInput={setNameInput}
                surnameInput={surnameInput} setSurnameInput={setSurnameInput}
                birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
                emailInput={emailInput} setEmailInput={setEmailInput}
                phoneInput={phoneInput} setPhoneInput={setPhoneInput}
                salaryInput={salaryInput} setSalaryInput={setSalaryInput}
                createTeacher={CreateTeacher}
            />
            <TeacherTable
                nameInput={nameInput} setNameInput={setNameInput}
                surnameInput={surnameInput} setSurnameInput={setSurnameInput}
                birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
                emailInput={emailInput} setEmailInput={setEmailInput}
                phoneInput={phoneInput} setPhoneInput={setPhoneInput}
                salaryInput={salaryInput} setSalaryInput={setSalaryInput}
                teachers={teachers} setId={setId} id={id}
                deleteTeacher={DeleteTeacher}
                updateTeacher={UpdateTeacher}
            />
        </div>
    )
}

export default Teacher

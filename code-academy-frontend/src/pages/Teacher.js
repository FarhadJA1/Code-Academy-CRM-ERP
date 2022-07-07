import React from 'react'
import '../assets/style/Teacher/Teacher.scss'
import TeacherCreateButton from '../components/Teacher/TeacherCreateButton'
import TeacherTable from '../components/Teacher/TeacherTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import TeacherSearch from '../components/Teacher/TeacherSearch';

function Teacher() {
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

    const url = "https://localhost:44380"

    const [teachers, setTeachers] = useState([]);
    const [professions, setProfessions] = useState([]);

    const [nameInput, setNameInput] = useState();
    const [surnameInput, setSurnameInput] = useState();
    const [birthdayInput, setBirthdayInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [phoneInput, setPhoneInput] = useState();
    const [salaryInput, setSalaryInput] = useState();
    const [professionInput, setProfessionInput] = useState();
    const [details, setDetails] = useState();
    const [search, setSearch] = useState([]);

    const [id, setId] = useState();

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState();
    const pageLimit = 3;
    let viewCount = ((currentPage - 1) * pageLimit);
    const length = total / pageLimit;

    async function GetTeachers() {
        await axios.get(`${url}/api/Teacher/GetAll`)
            .then(res => {
                setTeachers(res.data);
                setTotal(res.data.length)

            })
    }
    async function Search(data) {

        await axios.get(`${url}/api/Teacher/Search`, {
            params: {
                search: data
            }
        })
            .then(res => {
                setSearch(res.data);
            });
    }

    async function GetProfessions() {
        await axios.get(`${url}/api/Profession/GetAll`)
            .then(res => {
                setProfessions(res.data);
            })
    }
    useEffect(() => {
        GetTeachers();
        GetProfessions();

    }, [])
    async function TeacherDetails(id) {

        await axios.get(`${url}/api/Teacher/TeacherDetails/${id}`)
            .then(res => {
                setDetails(res.data);
            })
    }
    async function CreateTeacher() {
        await axios.post(`${url}/api/Teacher/CreateTeacher`, {
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            birthday: birthdayInput,
            phone: phoneInput,
            salary: salaryInput,
            professionId: professionInput,
        })
            .then(res => {
                GetTeachers();
                setNameInput("");
                setSurnameInput("");
                setBirthdayInput("");
                setPhoneInput("");
                setEmailInput("");
                setSalaryInput("");
                Success.fire({
                    icon: 'success',
                    title: 'Teacher successfully created'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    const DeleteTeacher = () => {
        debugger
        axios.get(`${url}/api/Teacher/DeleteTeacher/${id}`)
            .then(res => {
                GetTeachers();
                Success.fire({
                    icon: 'warning',
                    title: 'Teacher successfully deleted'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
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
            professionId: professionInput
        })
            .then(res => {
                GetTeachers();
                setNameInput("");
                setSurnameInput("");
                setBirthdayInput("");
                setPhoneInput("");
                setEmailInput("");
                setSalaryInput("");
                Success.fire({
                    icon: 'success',
                    title: 'Teacher successfully updated'
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
        <div className='teacher'>
            <div className='page-header'>
                <div className='search-filter'>
                    <TeacherSearch search={Search} />
                  
                </div>

                <TeacherCreateButton
                    nameInput={nameInput} setNameInput={setNameInput}
                    surnameInput={surnameInput} setSurnameInput={setSurnameInput}
                    birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
                    emailInput={emailInput} setEmailInput={setEmailInput}
                    phoneInput={phoneInput} setPhoneInput={setPhoneInput}
                    salaryInput={salaryInput} setSalaryInput={setSalaryInput}
                    professionInput={professionInput} setProfessionInput={setProfessionInput}
                    professions={professions}
                    createTeacher={CreateTeacher}
                />
            </div>

            <TeacherTable
                nameInput={nameInput} setNameInput={setNameInput}
                surnameInput={surnameInput} setSurnameInput={setSurnameInput}
                birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
                emailInput={emailInput} setEmailInput={setEmailInput}
                phoneInput={phoneInput} setPhoneInput={setPhoneInput}
                salaryInput={salaryInput} setSalaryInput={setSalaryInput}
                teachers={teachers} setId={setId} id={id}
                professionInput={professionInput} setProfessionInput={setProfessionInput}
                professions={professions}
                deleteTeacher={DeleteTeacher}
                updateTeacher={UpdateTeacher}
                details={details} setDetails={setDetails}
                teacherDetails={TeacherDetails}
                currentPage={currentPage} setCurrentPage={setCurrentPage}
                total={total} setTotal={setTotal} pageLimit={pageLimit} viewCount={viewCount}
                length={length}
                search={search}
            />
        </div>
    )
}

export default Teacher

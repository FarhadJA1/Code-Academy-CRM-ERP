import React from 'react'
import '../assets/style/Education/Education.scss'
import CreateGroupType from '../components/Education/CreateGroupType'
import EducationTable from '../components/Education/EducationTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
function Education() {
    const url = "https://localhost:44380/"
    const [education, setEducation] = useState([]);
    const [input, setInput] = useState();
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
        await axios.get(`${url}api/Education/GetAll`)
            .then(res => {
                setEducation(res.data);
            })
    }
    useEffect(() => {
        GetDatas();
    }, [])

    async function CreateEducation() {
        await axios.post(`${url}api/Education/CreateEducation`, {
            name: input
        })
            .then(res => {
                GetDatas();
                setInput("")
                Success.fire({
                    icon: 'success',
                    title: 'Education successfully created'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    const DeleteEducation = () => {
        axios.get(`${url}api/Education/DeleteEducation/${id}`)
            .then(res => {
                GetDatas();
                Success.fire({
                    icon: 'warning',
                    title: 'Education successfully deleted'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    async function UpdateEducation() {
        await axios.put(`${url}api/Education/UpdateEducation/${id}`, {
            name: input
        })
            .then(res => {
                GetDatas();
                Success.fire({
                    icon: 'success',
                    title: 'Education successfully updated'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    async function EducationDetails(id) {
        await axios.get(`${url}api/Education/EducationDetails/${id}`)
            .then(res => {
                setDetails(res.data);
            })
    }


    return (
        <div className='education'>
            <CreateGroupType input={input} setInput={setInput} createPayment={CreateEducation} />
            <EducationTable educationDetails={EducationDetails} details={details} setInput={setInput} education={education} id={id} setId={setId} deleteEducation={DeleteEducation} updateEducation={UpdateEducation} />
        </div>
    )
}

export default Education

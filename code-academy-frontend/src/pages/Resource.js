import React from 'react'
import '../assets/style/Resource/Resource.scss'
import ResourceCreateBtn from '../components/Resource/ResourceCreateBtn'
import ResourceTable from '../components/Resource/ResourceTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
function Resource() {
    const [resources, setResources] = useState([]);
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
        await axios.get(`https://localhost:44380/api/Resource/GetAll`)
            .then(res => {
                setResources(res.data);
            })
    }


    async function CreateResource() {
        await axios.post("https://localhost:44380/api/Resource/CreateResource", {
            name: input
        })
            .then(res => {
                GetDatas();
                setInput("")
                Success.fire({
                    icon: 'success',
                    title: 'Resource successfully created'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    const DeleteResource = () => {
        axios.get(`https://localhost:44380/api/Resource/DeleteResource/${id}`)
            .then(res => {
                GetDatas();
                Success.fire({
                    icon: 'warning',
                    title: 'Resource successfully deleted'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    async function UpdateResource() {
        await axios.put(`https://localhost:44380/api/Resource/UpdateResource/${id}`, {
            name: input
        })
            .then(res => {
                GetDatas();
                Success.fire({
                    icon: 'warning',
                    title: 'Resource successfully updated'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    async function ResourceDetails(id) {

        await axios.get(`https://localhost:44380/api/Resource/ResourceDetails/${id}`)
            .then(res => {
                setDetails(res.data);
            })
    }


    useEffect(() => {
        GetDatas();
    }, [])


    return (
        <div className='resource'>
            <ResourceCreateBtn input={input} setInput={setInput} createResource={CreateResource} />
            <ResourceTable resourceDetails={ResourceDetails} details={details} setInput={setInput} resources={resources} setId={setId} deleteResource={DeleteResource} updateResource={UpdateResource} id={id} />
        </div>
    )
}

export default Resource

import React from 'react'
import '../assets/style/PayType/PayType.scss'
import PaymentCreateButton from '../components/PayType/PaymentCreateButton'
import PayTypeTable from '../components/PayType/PayTypeTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
function PayType() {
    const url = "https://localhost:44380/"
    const [payment, setPayment] = useState([]);
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
        await axios.get(`${url}api/PayType/GetAll`)
            .then(res => {
                setPayment(res.data);
            })
    }
    useEffect(() => {
        GetDatas();
    }, [])
    async function CreatePayment() {
        await axios.post(`${url}api/PayType/CreatePayment`, {
            name: input
        })
            .then(res => {
                GetDatas();
                setInput("")
                Success.fire({
                    icon: 'success',
                    title: 'Payment option successfully created'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    const DeletePayment = () => {
        axios.get(`${url}api/PayType/DeletePayment/${id}`)
            .then(res => {
                GetDatas();
                Success.fire({
                    icon: 'warning',
                    title: 'Payment option successfully deleted'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    async function UpdatePayment() {
        await axios.put(`${url}api/PayType/UpdatePayment/${id}`, {
            name: input
        })
            .then(res => {
                GetDatas();
                Success.fire({
                    icon: 'success',
                    title: 'Payment option successfully updated'
                })
            })
            .catch(
                Reject.fire({
                    icon: 'error',
                    title: 'Something went wrong'
                })
            );
    }
    async function PaymentDetails(id) {
        debugger
        await axios.get(`${url}api/PayType/PaymentDetails/${id}`)
            .then(res => {
                setDetails(res.data);
            })
    }


    return (
        <div className='pay-type'>
            <PaymentCreateButton input={input} setInput={setInput} createPayment={CreatePayment} />
            <PayTypeTable paymentDetails={PaymentDetails} details={details} setInput={setInput} payment={payment} id={id} setId={setId} deletePayment={DeletePayment} updatePayment={UpdatePayment} />
        </div>
    )
}

export default PayType

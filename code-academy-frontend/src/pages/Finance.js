import React from 'react'
import FinanceButton from '../components/Finance/FinanceButton'
import FinanceTable from '../components/Finance/FinanceTable'
import PrintButton from '../components/Finance/PrintButton'
import { useState, useEffect } from 'react';
import '../assets/style/Finance/Finance.scss'
import axios from 'axios';
import Swal from 'sweetalert2';
function Finance() {
  const url = "https://localhost:44380"
  const [createDate, setCreateDate] = useState();
  const [reports, setReports] = useState([]);

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

  async function GetReports() {
    const response = await axios.get(`${url}/api/Finance/GetAll`)
      .catch(error => console.log(error));
    setReports(response.data);
  }
  useEffect(() => {
    GetReports();
  }, []);

  async function CreateReport() {

    await axios.post(`${url}/api/Finance/CreateReport`, {
      createDate: createDate,
    })
      .then(res => {
        GetReports();
        setCreateDate("");
        Success.fire({
          icon: 'success',
          title: 'Report successfully created'
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
    <div className='container finance'>
      <div className='finance-buttons my-3'>
        <div className='me-4'>
          <PrintButton />
        </div>
        <div>
          <FinanceButton createDate={createDate} setCreateDate={setCreateDate}
            createReport={CreateReport}
          />
        </div>
      </div>

      <FinanceTable reports={reports} />
    </div>
  )
}

export default Finance

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { async } from 'rxjs';
import '../assets/style/Dashboard.scss'
import From from '../components/Dashboard/From'
import GroupChart from '../components/Dashboard/GroupChart';
import StudentChart from '../components/Dashboard/StudentChart';
import TeacherChart from '../components/Dashboard/TeacherChart';
import Welcome from '../components/Dashboard/Welcome'
function Dashboard() {
  const url = "https://localhost:44380";

  //from
  const [fromWeb, setFromWeb] = useState([]);
  const [fromSocial, setFromSocial] = useState([]);
  const [fromSuggestion, setFromSuggestion] = useState([]);
  const [fromCall, setFromCall] = useState([]);

  //groups
  const [programming, setProgramming] = useState([]);
  const [design, setDesign] = useState([]);
  const [system, setSystem] = useState([]);
  const [marketing, setMarketing] = useState([]);

  //students
  const [programmingStudents, setProgrammingStudents] = useState([]);
  const [designStudents, setDesignStudents] = useState([]);
  const [systemStudents, setSystemStudents] = useState([]);
  const [marketingStudents, setMarketingStudents] = useState([]);

  //finance
  const [reports, setReports] = useState([]);

  async function GetProgrammingStudents() {
    await axios.get(`${url}/api/Student/GetProgrammingStudents`)
      .then(res => {
        setProgrammingStudents(res.data);
      })
  }
  async function GetDesignStudents() {
    await axios.get(`${url}/api/Student/GetDesignStudents`)
      .then(res => {
        setDesignStudents(res.data);
      })
  }
  async function GetMarketingStudents() {
    await axios.get(`${url}/api/Student/GetMarketingStudents`)
      .then(res => {
        setMarketingStudents(res.data);
      })
  }
  async function GetSystemStudents() {
    await axios.get(`${url}/api/Student/GetSystemStudents`)
      .then(res => {
        setSystemStudents(res.data);
      })
  }

  async function GetProgrammingGroups() {
    await axios.get(`${url}/api/Group/GetProgrammingGroups`)
      .then(res => {
        setProgramming(res.data);
      })
  }
  async function GetDesignGroups() {
    await axios.get(`${url}/api/Group/GetDesignGroups`)
      .then(res => {
        setDesign(res.data);
      })
  }
  async function GetMarketingGroups() {
    await axios.get(`${url}/api/Group/GetMarketingGroups`)
      .then(res => {
        setMarketing(res.data);
      })
  }
  async function GetSystemGroups() {
    await axios.get(`${url}/api/Group/GetSystemGroups`)
      .then(res => {
        setSystem(res.data);
      })
  }




  async function GetStudentsFromWeb() {
    await axios.get(`${url}/api/Student/GetStudentsFromWeb`)
      .then(res => {
        setFromWeb(res.data);
      })
  }
  async function GetStudentsFromSocial() {
    await axios.get(`${url}/api/Student/GetStudentsFromSocialNetwork`)
      .then(res => {
        setFromSocial(res.data);
      })
  }
  async function GetStudentsFromCall() {
    await axios.get(`${url}/api/Student/GetStudentsFromCall`)
      .then(res => {
        setFromCall(res.data);
      })
  }
  async function GetStudentsFromSuggestion() {
    await axios.get(`${url}/api/Student/GetStudentsFromSuggestion`)
      .then(res => {
        setFromSuggestion(res.data);
      })
  }
  async function GetReports() {
    const response = await axios.get(`${url}/api/Finance/GetAll`)
      .catch(error => console.log(error));
    setReports(response.data);
  }

  

  useEffect(() => {
    GetStudentsFromSocial();
    GetStudentsFromWeb();
    GetStudentsFromCall();
    GetStudentsFromSuggestion();
    GetProgrammingGroups();
    GetDesignGroups();
    GetSystemGroups();
    GetMarketingGroups();
    GetProgrammingStudents();
    GetSystemStudents();
    GetDesignStudents();
    GetMarketingGroups();
    GetReports();
   
  }, [])


  return (
    <div className='dashboard'>
      <Welcome />
      <From
        fromWeb={fromWeb} fromSocial={fromSocial}
        fromSuggestion={fromSuggestion} fromCall={fromCall}

      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <GroupChart
              programmingStudents={programmingStudents} designStudents={designStudents}
              marketingStudents={marketingStudents} systemStudents={systemStudents}
              
            />
          </div>
          <div className="col-lg-6">
            <StudentChart 
            reports={reports}
            />
          </div>
        </div>

        <div className="teacher-chart-area">

          <TeacherChart
            system={system} programming={programming}
            design={design} marketing={marketing}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
import '../assets/style/Resource/Resource.scss'
import ResourceCreateBtn from '../components/Resource/ResourceCreateBtn'
import ResourceTable from '../components/Resource/ResourceTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Resource() {
    const [resources, setResources] = useState([]);
    function GetDatas() {
        axios.get(`https://localhost:44380/api/Resource/GetAll`)
            .then(res => {
                const persons = res.data;
                setResources(persons);
            })
    }

    const [input, setInput] = useState();

    async function CreateResource() {
        await axios.post("https://localhost:44380/api/Resource/CreateResource", {
            name: input
        })
            .then(res => {
                GetDatas();
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        GetDatas();
    }, [])


    return (
        <div className='resource'>
            <ResourceCreateBtn myInput={setInput} createResource={CreateResource} />
            <ResourceTable resources={resources} />
        </div>
    )
}

export default Resource

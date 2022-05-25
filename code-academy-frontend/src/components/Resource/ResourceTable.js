import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import ResourceDeleteBtn from './ResourceDeleteBtn'
import ResourceEditBtn from './ResourceEditBtn'
import ResourceInfoBtn from './ResourceInfoBtn'

function ResourceTable() {
    async function GetDatas() {
        const response = await axios.get("https://localhost:44380/api/Resource/GetAll")
            .catch(error => console.log(error));
        setResources(response.data);        
    }


    const [resources, setResources] = useState([]);
    let count = 1
    useEffect(() => {
        GetDatas();
    }, []);
    
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' align='center' scope="col">#</th>
                        <th className='table-header' align='center' scope="col">Resource</th>
                        <th className='table-header' align='center' scope="col">Students (total)</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map(resource => (
                        <tr>
                            <th className='table-header' scope="row">{count++}</th>
                            <td align='center'>{resource.name}</td>
                            <td align='center'>{resource.students.length}</td>
                            <td className='table-button-area' align='center'>
                                <ResourceInfoBtn />
                                <ResourceDeleteBtn />
                                <ResourceEditBtn />
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ResourceTable

import React from 'react'
import ResourceDeleteBtn from './ResourceDeleteBtn'
import ResourceEditBtn from './ResourceEditBtn'
import ResourceInfoBtn from './ResourceInfoBtn'

function ResourceTable(props) {
  
    let count = 1
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
                    {props.resources.map(resource => (
                        <tr key={resource.id}>                            
                            <th className='table-header' scope="row">{count++}</th>
                            <td align='center'>{resource.name}</td>
                            <td align='center'>{resource.students.length}</td>
                            <td  className='table-button-area' align='center'>
                                <ResourceInfoBtn />
                                <ResourceDeleteBtn  value={resource.id}/>
                                <ResourceEditBtn />
                            </td>
                        </tr>
                        
                    ))                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ResourceTable

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
                            <td className='table-header' align='center'>{resource.name}</td>
                            <td className='table-header' align='center'>{resource.students.length}</td>
                            <td  className='table-button-area' align='center'>
                                <ResourceInfoBtn resource={resource} id={props.id} value={resource.id} setId={props.setId} resourceDetails={props.resourceDetails}/>
                                <ResourceDeleteBtn id={props.id} value={resource.id} setId={props.setId} deleteResource={props.deleteResource}/>
                                <ResourceEditBtn setInput={props.setInput} name={resource.name} id={props.id} value={resource.id} setId={props.setId} updateResource={props.updateResource}/>
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

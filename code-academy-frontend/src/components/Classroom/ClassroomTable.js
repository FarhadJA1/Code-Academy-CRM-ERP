import React from 'react'
import ClassroomDeleteBtn from './ClassroomDeleteBtn'
import ClassroomEditBtn from './ClassroomEditBtn'
import ClassroomInfoBtn from './ClassroomInfoBtn'

function ClassroomTable(props) {
    let count = 1
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">Name</th>
                        <th className='table-header' scope="col">Groups (total)</th>
                        <th className='table-header' scope="col">Capacity</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {props.classrooms.map(cl => (
                        <tr>
                            <th className='table-header' scope="row">{count++}</th>
                            <td align='center'>{cl.name}</td>
                            <td align='center'>Otto</td>
                            <td align='center'>{cl.capacity}</td>
                            <td className='table-header table-button-area'>
                                <ClassroomInfoBtn cl={cl} id={props.id} value={cl.id} setId={props.setId} classroomDetails={props.classroomDetails}/>
                                <ClassroomDeleteBtn id={props.id} value={cl.id} setId={props.setId} deleteClassroom={props.deleteClassroom}/>
                                <ClassroomEditBtn setNameInput={props.setNameInput} setCapacityInput={props.setCapacityInput} capacity={cl.capacity} name={cl.name} id={props.id} value={cl.id} setId={props.setId} updateClassroom={props.updateClassroom}/>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ClassroomTable

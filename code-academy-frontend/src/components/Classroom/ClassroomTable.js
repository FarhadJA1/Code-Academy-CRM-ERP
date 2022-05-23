import React from 'react'
import ClassroomDeleteBtn from './ClassroomDeleteBtn'
import ClassroomEditBtn from './ClassroomEditBtn'
import ClassroomInfoBtn from './ClassroomInfoBtn'

function ClassroomTable() {
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
                    <tr>
                        <th className='table-header' scope="row">1</th>
                        <td align='center'>Mark</td>
                        <td align='center'>Otto</td>
                        <td align='center'>Otto</td>
                        <td  className='table-header table-button-area'>
                            <ClassroomInfoBtn/>
                            <ClassroomDeleteBtn/>
                            <ClassroomEditBtn/>
                        </td>
                    </tr>       
                </tbody>
            </table>
        </div>
    )
}

export default ClassroomTable

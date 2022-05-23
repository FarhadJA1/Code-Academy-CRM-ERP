import React from 'react'
import StudentDeleteBtn from './StudentDeleteBtn'
import StudentEditBtn from './StudentEditBtn'
import StudentInfoBtn from './StudentInfoBtn'

function StudentsTable() {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">Name</th>
                        <th className='table-header' scope="col">Surname</th> 
                        <th className='table-header' scope="col">Birthday</th>
                        <th className='table-header' scope="col">Group Code</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='table-header' scope="row">1</th>
                        <td align='center'>Mark</td>
                        <td align='center'>Otto</td>
                        <td align='center'>@mdo</td>
                        <td align='center'>@mdo</td>
                        <td className='table-button-area' align='center'>
                            <StudentInfoBtn/>
                            <StudentDeleteBtn/>
                            <StudentEditBtn/>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable

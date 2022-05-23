import React from 'react'
import EditEducation from './EditEducation';
import DeleteEducation from './DeleteEducation';
import EducationDetails from './EducationDetails';
function EducationTable() {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">Type</th>
                        <th className='table-header' scope="col">Groups (total)</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='table-header'  scope="row">1</th>
                        <td align='center'>Mark</td>
                        <td align='center'>Otto</td>
                        <td className='table-header table-button-area'>
                            <EducationDetails/>
                            <DeleteEducation/>
                            <EditEducation/>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default EducationTable

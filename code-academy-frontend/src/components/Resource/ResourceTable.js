import React from 'react'
import ResourceDeleteBtn from './ResourceDeleteBtn'
import ResourceEditBtn from './ResourceEditBtn'
import ResourceInfoBtn from './ResourceInfoBtn'

function ResourceTable() {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' align='center' scope="col">#</th>
                        <th className='table-header' align='center' scope="col">Resource</th>
                        <th className='table-header' align='center' scope="col">Students (total)</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='table-header' scope="row">1</th>
                        <td align='center'>Mark</td>
                        <td align='center'>Otto</td>
                        <td className='table-button-area' align='center'>
                            <ResourceInfoBtn/>
                            <ResourceDeleteBtn/>
                            <ResourceEditBtn/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResourceTable

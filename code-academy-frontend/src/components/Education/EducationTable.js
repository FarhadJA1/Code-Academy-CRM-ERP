import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
function EducationTable() {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Groups (total)</th>
                        <th scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button type="button" className="btn btn-outline-info group-btn"><InfoOutlinedIcon /></button>
                            <button type="button" className="btn btn-outline-danger group-btn mx-1"><DeleteOutlineOutlinedIcon /></button>
                            <button type="button" className="btn btn-outline-warning group-btn" ><EditOutlinedIcon /></button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default EducationTable

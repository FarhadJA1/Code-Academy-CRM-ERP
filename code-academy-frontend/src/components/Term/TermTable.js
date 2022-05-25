import React from 'react'
import TermDeleteBtn from './TermDeleteBtn'
import TermEditBtn from './TermEditBtn'
import TermInfoBtn from './TermInfoBtn'


function TermTable() {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">Days</th>
                        <th className='table-header' scope="col">Time</th> 
                        <th className='table-header' scope="col">Settings</th>                            
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='table-header' scope="row">1</th>
                        <td align='center'>Mark</td>
                        <td align='center'>Otto</td>                                             
                        <td className='table-button-area' align='center'>
                            <TermInfoBtn/>
                            <TermDeleteBtn/>
                            <TermEditBtn/>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default TermTable

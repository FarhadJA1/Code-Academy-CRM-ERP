import React from 'react'
import PaymentDeleteBtn from './PaymentDeleteBtn'
import PaymentEditBtn from './PaymentEditBtn'
import PaymentInfoBtn from './PaymentInfoBtn'

function PayTypeTable() {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">Type</th>
                        <th className='table-header' scope="col">Students (total)</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='table-header' scope="row">1</th>
                        <td align='center'>Mark</td>
                        <td align='center'>Otto</td>
                        <td className='table-button-area' align='center'>
                            <PaymentInfoBtn/>
                            <PaymentDeleteBtn/>
                            <PaymentEditBtn/>
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    )
}

export default PayTypeTable

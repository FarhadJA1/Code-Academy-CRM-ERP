import React from 'react'
import PaymentDeleteBtn from './PaymentDeleteBtn'
import PaymentEditBtn from './PaymentEditBtn'
import PaymentInfoBtn from './PaymentInfoBtn'

function PayTypeTable(props) {
    let count = 1;
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">Type</th>
                        <th className='table-header' scope="col">Students (total)</th>
                        <th className='table-header' scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {props.payment.map(pay => (
                        <tr key={pay.id}>
                            <th className='table-header' scope="row">{count++}</th>
                            <td align='center'>{pay.name}</td>
                            <td align='center'>{pay.students.length}</td>
                            <td className='table-button-area' align='center'>
                                <PaymentInfoBtn />
                                <PaymentDeleteBtn id={props.id} value={pay.id} setId={props.setId} deletePayment={props.deletePayment}/>
                                <PaymentEditBtn setInput={props.setInput} name={pay.name} id={props.id} value={pay.id} setId={props.setId} updatePayment={props.updatePayment}/>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default PayTypeTable

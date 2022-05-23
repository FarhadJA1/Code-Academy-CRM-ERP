import React from 'react'
import '../assets/style/PayType/PayType.scss'
import PaymentCreateButton from '../components/PayType/PaymentCreateButton'
import PayTypeTable from '../components/PayType/PayTypeTable'
function PayType() {
    return (
        <div className='pay-type'>
            <PaymentCreateButton />
            <PayTypeTable />
        </div>
    )
}

export default PayType

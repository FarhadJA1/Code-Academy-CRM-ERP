import React from 'react'
import FinanceButton from '../components/Finance/FinanceButton'
import FinanceTable from '../components/Finance/FinanceTable'
import PrintButton from '../components/Finance/PrintButton'
import '../assets/style/Finance/Finance.scss'
function Finance() {
  return (
    <div className='container finance'>
      <div className='finance-buttons my-3'>
        <div className='me-4'>
          <PrintButton />
        </div>
        <div>
          <FinanceButton />
        </div>

      </div>

      <FinanceTable />
    </div>
  )
}

export default Finance

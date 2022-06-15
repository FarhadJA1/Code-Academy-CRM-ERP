import React from 'react'

function FinanceTable() {
  return (
    <div>
      <table class="table table-hover finance-table">
        <thead>
          <tr>
            <th className='table-header'  scope="col">#</th>
            <th className='table-header' scope="col">Report Date</th>
            <th className='table-header' scope="col">Income</th>
            <th className='table-header' scope="col">Expence</th>
            <th className='table-header' scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='table-header' scope="row">1</th>
            <td align='center'>Mark</td>
            <td align='center'>Otto</td>
            <td align='center'>@mdo</td>
            <td align='center'>@mdo</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default FinanceTable

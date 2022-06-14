import React from 'react'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
function PrintButton() {
  let table=document.querySelector(".finance-table")
  return (
    <div>
      <button onClick={()=>window.print()} type="button" class="btn btn-outline-dark print-btn"><LocalPrintshopIcon/></button>
    </div>
  )
}

export default PrintButton

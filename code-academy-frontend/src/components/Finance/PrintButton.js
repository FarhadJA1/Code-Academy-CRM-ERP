import React from 'react'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
function PrintButton() {
    
  function printDiv(divName){
    var printContents = document.querySelector(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    

    window.print();

    document.body.innerHTML = originalContents;

  }
  return (
    <div>
      <button onClick={()=>printDiv(".finance-table")} type="button" class="btn btn-outline-dark print-btn"><LocalPrintshopIcon/></button>
    </div>
  )
}

export default PrintButton

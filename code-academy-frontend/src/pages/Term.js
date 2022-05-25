import React from 'react'
import TermTable from '../components/Term/TermTable'
import '../assets/style/Term/Term.scss'
import TermCreateBtn from '../components/Term/TermCreateBtn'
function Term() {
  return (
    <div className='term'>
      <TermCreateBtn/>
      <TermTable/>
    </div>
  )
}

export default Term

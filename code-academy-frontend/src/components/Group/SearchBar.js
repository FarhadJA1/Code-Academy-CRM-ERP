import React from 'react'
import { TextField } from '@mui/material'

function SearchBar(props) {
  return (
    <div className='mt-3 ms-3'>
      <TextField className='search-input' onChange={(e)=>props.search(e.target.value)} label='Search' autoComplete='off'  type='text' id="outlined-basic"  variant="outlined" />
    </div>
  )
}

export default SearchBar

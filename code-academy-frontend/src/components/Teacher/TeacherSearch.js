import React from 'react'
import { TextField } from '@mui/material'
function TeacherSearch(props) {
    return (
        <div>
            <div className='mt-3 ms-3'>
                <TextField className='search-input' onChange={(e) => props.search(e.target.value)} label='Search' autoComplete='off' type='text' id="outlined-basic" variant="outlined" />
            </div>
        </div>
    )
}

export default TeacherSearch

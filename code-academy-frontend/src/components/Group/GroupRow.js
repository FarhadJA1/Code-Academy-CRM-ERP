import React from 'react'
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';





function GroupRow(props) {
    const [open, setOpen] = useState(false);
    const { row } = props;
  return (
    <React.Fragment>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
            >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
        </TableCell>
        <TableCell align='center' component="th" scope="row">
            {row.groupCode}
        </TableCell>
        <TableCell align='center'>{row.startDate}</TableCell>
        <TableCell align='center'>{row.expireDate}</TableCell>
        <TableCell align='center'>{row.classroom}</TableCell>
        <TableCell align='center'>{row.teacher}</TableCell>
        <TableCell align='center'>{row.students}</TableCell>
    </TableRow>
    <TableRow>
        <TableCell className='addition' style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                    <Typography className='addition-title' variant="h6" gutterBottom component="div">
                        IN ADDITION
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                            <TableRow>
                                <TableCell className='addition-row addition-row-header-left'>Operations</TableCell>

                                <TableCell className='addition-row addition-row-header-rigth'>Settings</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.history.map((historyRow) => (
                                <TableRow key={historyRow.date}>
                                    <TableCell className='addition-row' component="th" scope="row">
                                        <button type="button" className="btn btn-outline-success group-add">Add Student</button>
                                        <button type="button" className="btn btn-outline-success group-add add-classroom mx-1">Assign a Classroom</button>
                                        <button type="button" className="btn btn-outline-success group-add">Add Teacher</button>
                                    </TableCell>
                                    <TableCell className='addition-row'>
                                        <button type="button" className="btn btn-outline-info group-btn"><InfoOutlinedIcon className='group-btn-icon' /></button>
                                        <button type="button" className="btn btn-outline-danger group-btn mx-1"><DeleteOutlineOutlinedIcon className='group-btn-icon' /></button>
                                        <button type="button" className="btn btn-outline-warning group-btn"><EditOutlinedIcon className='group-btn-icon' /></button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Collapse>
        </TableCell>
    </TableRow>
</React.Fragment>
  )
}

export default GroupRow

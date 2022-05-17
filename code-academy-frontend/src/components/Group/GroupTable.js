import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../../assets/style/Group/GroupTable.scss'

function GroupTable() {
  const [open, setOpen] = useState(false);
  const [groups,setGroups]= useState([]);
  let count = 1
  useEffect(() => {
    async function GetDatas() {
      const response = await axios.get("https://localhost:44380/api/Group/GetAll")
      .catch(error => console.log(error));
      setGroups(response.data);
    }
    GetDatas();
  }, 
  []);

  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className='col-lg-2' align="center">#</TableCell>
            <TableCell className='col-lg-2' align="center">Group Code</TableCell>
            <TableCell className='col-lg-2' align="center">Start Date</TableCell>
            <TableCell className='col-lg-2' align="center">Expire Date</TableCell>
            <TableCell className='col-lg-2' align="center">Teacher</TableCell>
            <TableCell className='col-lg-2' align="center">Students (total)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map(group =>(            
            <React.Fragment>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={(e) => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell className='col-lg-2' align="center">{count++}</TableCell>
                <TableCell className='col-lg-2' align="center">{group.groupCode}</TableCell>
                <TableCell className='col-lg-2' align="center">10</TableCell>
                <TableCell className='col-lg-2' align="center">1</TableCell>
                <TableCell className='col-lg-2' align="center">1</TableCell>
                <TableCell className='col-lg-2' align="center">1</TableCell>
              </TableRow>
              <TableRow className='addition'>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Typography className='addition-title' variant="h6" gutterBottom component="div">
                        IN ADDITIONAL
                      </Typography>
                      <Table size="small" aria-label="purchases">
                        <TableHead>
                          <TableRow className='addition-row'>
                            <TableCell className='addition-row'>Operations</TableCell>
                            <TableCell className='addition-row'>Settings</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow className='addition-row'>
                            <TableCell component="th" scope="row" className='addition-row'>
                              <button type="button" className="btn btn-outline-success group-add">Add Student</button>
                              <button type="button" className="btn add-classroom btn-outline-success group-add mx-1">Assign a Classroom</button>
                              <button type="button" className="btn btn-outline-success group-add">Add Teacher</button>
                            </TableCell>
                            <TableCell className='addition-row'>
                              <button type="button" className="btn btn-outline-info group-btn"><InfoOutlinedIcon /></button>
                              <button type="button" className="btn btn-outline-danger group-btn mx-1"><DeleteOutlineOutlinedIcon /></button>
                              <button type="button" className="btn btn-outline-warning group-btn"><EditOutlinedIcon /></button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GroupTable

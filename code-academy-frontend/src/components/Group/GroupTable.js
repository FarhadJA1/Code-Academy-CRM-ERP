import * as React from 'react';
import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import '../../assets/style/Group/GroupTable.scss'
import {MainContext} from '../../contexts/Context'
import GroupRow from './GroupRow';

function createData(groupCode, startDate, expireDate, classroom, teacher, students) {
    return {
        groupCode,
        startDate,
        expireDate,
        classroom,
        teacher,
        students,
        history: [
            {
                operations: '',
                settings: '',
            },

        ],
    };
}


function Row(props) {
    var [groups, setGroups] = useState([]);
    
    useEffect(() => {
        axios
            .get("https://localhost:44380/api/Group/GetAll")
            .then(response => {
                setGroups(response.data)
            })
            .catch(error => console.log(error));

    });

    return (
       <MainContext.Provider>
           <GroupRow/>
       </MainContext.Provider>
    );

}

var rows = [
    // groups.map(group => (
    //     createData(group.groupCode, group.startDate, group.expireDate, group.classroom, group.teacher, group.students)
    // ))
];
 

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align='center'>Group Code</TableCell>
                        <TableCell align='center'>Start Date</TableCell>
                        <TableCell align='center'>Expire Date</TableCell>
                        <TableCell align='center'>Classroom</TableCell>
                        <TableCell align='center'>Teacher</TableCell>
                        <TableCell align='center'>Students (total)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

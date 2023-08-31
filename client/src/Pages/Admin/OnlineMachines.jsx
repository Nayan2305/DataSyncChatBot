import React from 'react'
import {Navbar} from '../../Components/index'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const CenteredHeading = styled('h2')({
  textAlign: 'center',
});


function OnlineMachines() {
  // Replace this with your actual data
  const users = [
    { id: 1, name: 'Machine 1', user: 'User1' },
    { id: 2, name: 'Machine 2', user: 'User2' },
    // Add more user data
  ];

  return (
    <>
    <Navbar/>
    <CenteredHeading>Online Machines</CenteredHeading>
    <TableContainer component={Paper}>
      <Table aria-label="Total Users Table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Machine</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.user}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default OnlineMachines;
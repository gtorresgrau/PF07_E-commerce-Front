import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getUsers } from '../Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import axios from 'axios';

export default function BasicTable() {
    const dispatch = useDispatch();
    const rows = useSelector((state) => state.users);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isBanned, setIsBanned] = React.useState(false);
    const [checked, setChecked] = React.useState(true);

    React.useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    
    React.useEffect(() => {
      rows.forEach(row => {
        if (isBanned !== null) {
          setIsBanned(localStorage.getItem(`isBanned-${row.id}`));
          console.log('row.id:',row.id)
        }
        if (isAdmin !== null) {
          setIsAdmin(localStorage.getItem(`isAdmin-${row.id}`));
          console.log('row.id:',row.id)
        }
      });
    }, [rows, isAdmin, isBanned]);

    const handleChange = async (event, id) => {
      setChecked(event.target.checked);
      setIsBanned(event.target.checked);
      localStorage.setItem(`isBanned-${id}`, event.target.checked);
      await axios.put(`/userbanned/${id}`, {
        isBanned: event.target.checked
      });
    };
    
    const handleChangeAd = async (event, id) => {
      setChecked(event.target.checked);
      setIsAdmin(event.target.checked);
      localStorage.setItem(`isAdmin-${id}`, event.target.checked);
      await axios.put(`/useradmin/${id}`, {
        isAdmin: event.target.checked
      });
    };

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">User</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="right">Is Admin</TableCell>
            <TableCell align="right">Is Banned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="right">
                { <Switch
                
                onChange={(event) => handleChangeAd(event, row.id)}
                inputProps={{ 'aria-label': 'controlled' }}
             /> }
             </TableCell>
              <TableCell align="right">
                <Switch
                
                onChange={(event) => handleChange(event, row.id)}
                inputProps={{ 'aria-label': 'controlled' }}
                />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
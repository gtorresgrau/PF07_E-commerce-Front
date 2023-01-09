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
    const [checked, setChecked] = React.useState(true);

    React.useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);


       const handleChange = async (event, id) => {
        setChecked(event.target.checked);
        console.log('checked', checked);
        console.log('id', id);
        if (checked) {
            await axios.put(`http://localhost:3001/userbanned/${id}`)
            return alert("the user has been banned")
        } 
      };

  return (
    <TableContainer component={Paper}>
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
              key={row.fullName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="right">
                {/* <Switch
                    checked={checked}
                    onChange={handleChange(row.id)}
                    inputProps={{ 'aria-label': 'controlled' }}
             /> */}
             </TableCell>
              <TableCell align="right">
                <Switch
                
                onChange={handleChange(row.id)}
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
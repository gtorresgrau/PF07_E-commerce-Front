import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from "../Actions/Actions";
import { Switch } from '@mui/material';
import axios from 'axios';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [

  {
    id: 'title',
    numeric: true,
    disablePadding: false,
    label: 'Order',
  },

  {
    id: 'img',
    numeric: true,
    disablePadding: true,
    label: 'User',
  },

  {
    id: 'price',
    numeric: false,
    disablePadding: true,
    label: 'Item',
  },
  {
    id: 'quantity',
    numeric: false,
    disablePadding: true,
    label: 'Quantity',
  },
  {
    id: 'buyer',
    numeric: false,
    disablePadding: true,
    label: 'Price ($)',
  },
  {
    id: 'buyer',
    numeric: false,
    disablePadding: true,
    label: 'Total ($)',
  },
  {
    id: 'sneaker',
    numeric: false,
    disablePadding: true,
    label: 'Status',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Date',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Sent',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };


  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ pl: '1.8rem' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {

  return (
    <Toolbar

      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Orders
      </Typography>

    </Toolbar>
  );
}

const handleChange = async (event, id, email) => {
  const input = { email, delivered: event.target.checked }
  await axios.put(`/updateOrder/${id}`, input);
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected,] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense,] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch]);
  console.log(rows)

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'small'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                 
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="left">{row.payer.fullName}</TableCell>
                      <TableCell align="left">{row.items.map((r) => <div>{r.title}</div>)}</TableCell>
                      <TableCell align="center">{row.items.map((r) => <div>{r.quantity}</div>)}</TableCell>
                      <TableCell align="center">{row.items.map((r) => <div>{r.price}</div>)}</TableCell>
                      <TableCell align="center">{row.items.map((r) => (r.price * r.quantity)).reduce((a, b) => a + b, 0)}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">{new Date(row.createdAt).toLocaleString()}</TableCell>
                      <TableCell align="right">
                        <Switch
                          defaultChecked={row.delivered}
                          onChange={(event) => handleChange(event, row.id, row.email)}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                      </TableCell>


                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );

}

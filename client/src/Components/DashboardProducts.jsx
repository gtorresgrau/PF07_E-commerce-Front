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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import { visuallyHidden } from '@mui/utils';
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllSneackers } from "../Actions/Actions";
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { deleteSneaker } from '../Actions/Actions';


const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

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
    label: 'All Sneakers',
  },

  {
    id: 'img',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  
  {
    id: 'price',
    numeric: false,
    disablePadding: true,
    label: 'Price ($)',
  },
  {
    id: 'brand',
    numeric: false,
    disablePadding: true,
    label: 'Brand',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: true,
    label: 'Type',
  },
  {
    id: 'edit',
    numeric: false,
    disablePadding: true,
    label: 'Edit',
  },
  {
    id: 'delete',
    numeric: false,
    disablePadding: true,
    label: 'Delete',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, numSelected, rowCount, onRequestSort } =
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
          Sneakers
        </Typography>
      
    </Toolbar>
  );
    }

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense,] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.allSneakers);

    useEffect(() => {

      dispatch(getAllSneackers())
    }, [dispatch]);

    



const alertDelete = (id) => {
  Swal.fire({
    title: `Sneaker ${id} was deleted succesfully`,
    icon: "success",
    confirmButtonText: "OK",
  })  };

let handleDelete = (id) => { 
  dispatch(deleteSneaker(id));
  alertDelete(id);
};

  const handleRequestSort = (event, property) => {
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
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.title}
                      >                      
                      <TableCell
                      align="center"
                      >
                     <img
                            src={`${row.image}`}
                            alt={row.title}
                            height="100rem"
                            padding="none"
                      />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          align="left"
                        >
                        {row.title}
                      </TableCell>
                     
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.brand}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">
                        <IconButton href={`/updateSneaker/${row.id}`} aria-label="delete">
                          <ModeEditIcon/>
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                          <IconButton onClick={(id) => handleDelete(row.id)} aria-label="delete">
                            <DeleteIcon/>
                          </IconButton>
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

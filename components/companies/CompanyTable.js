import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


export default function CompanyTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [negative, setNegative] = useState('blue');

  const tableData = props.data.companyData
  console.log(tableData[0])
  const columns = [
    {
      id: 'stockname',
      label: 'Name',
      minWidth: 110
    },
    {
      id: 'stocksymbol',
      label: 'stock symbol',
      minWidth: 100
    },
    {
      id: 'percentdifference',
      label: '%difference',
      minWidth: 60,
      align: 'right',
    },
    {
      id: 'totalquantity',
      label: 'total quantity',
      minWidth: 100,
      align: 'right',
    },
  
    {
      id: 'minprice',
      label: 'min price',
      minWidth: 100,
      align: 'right',
    },

    {
      id: 'maxprice',
      label: 'max price',
      minWidth: 100,
      align: 'right'
    },

    {
      id: 'closingprice',
      label: 'close price',
      minWidth: 100,
      align: 'right'
    }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={8} sx={{
      overflow: 'hidden',
      padding: 2
    }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ 
                    minWidth: column.minWidth,
                    color: 'black',
                    fontFamily: 'cursive',
                    fontStyle: 'italic',
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.stocksymbol}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                          key={column.id} 
                          align={column.align}
                          sx={{
                            backgroundColor: (row.percentdifference > 0) ? 'green' : (row.percentdifference < 0) ? 'red' : 'blue',
                            color: 'white'
                          }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
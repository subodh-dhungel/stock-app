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

  const tableData = props.data.companyData.result.stocks
  
  const columns = [
    {
      id: 'companyName',
      label: 'Name',
      minWidth: 110
    },

    {
      id: 'stockSymbol',
      label: 'stock symbol',
      minWidth: 100
    },

    {
      id: 'percentChange',
      label: '%difference',
      minWidth: 60,
      align: 'right',
    },

    {
      id: 'volume',
      label: 'volume',
      minWidth: 60,
      align: 'right'
    },
    
    {
      id: 'noOfTransactions',
      label: 'n of Transaction',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'openingPrice',
      label: 'open',
      minWidth: 100,
      align: 'right'
    },
  
    {
      id: 'minPrice',
      label: 'min price',
      minWidth: 100,
      align: 'right',
    },

    {
      id: 'maxPrice',
      label: 'max',
      minWidth: 100,
      align: 'right'
    },

    {
      id: 'closingPrice',
      label: 'close',
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
        <Table sx={{ width: "max-content" }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
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
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                          key={index} 
                          align={column.align}
                          sx={{
                            backgroundColor: (row.percentChange > 0) ? 'green' : (row.percentChange < 0) ? 'red' : 'blue',
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
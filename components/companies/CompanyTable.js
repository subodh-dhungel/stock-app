import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  {
    id: 'Company',
    label: 'Company',
    minWidth: 170
  },
  {
    id: 'symbol',
    label: 'symbol',
    minWidth: 100
  },
  {
    id: 'paidUpCapital',
    label: 'paid up capital',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'listedShares',
    label: 'listed Shares',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'ltp',
    label: 'LTP',
    minWidth: 170,
    align: 'right',
  }
];

function createData(Company, symbol, paidUpCapital, listedShares, ltp) {
  const density = paidUpCapital / listedShares;
  return { Company, symbol, paidUpCapital, listedShares, density, ltp };
}

const rows = [
  createData('Nabil Bank Limited', 'NABIL', 1324171354, 3287263, 590),
  createData('Prime Commercial Bank Limited', 'PCBL', 1403500365, 9596961, 193),
  createData('NIC Asia Bank Limited', 'NICA', 60483973, 301340, 620),
  createData('Himalayan Bank Limited', 'HBL', 327167434, 9833520, 220),
  createData('Kumari Bank Limited', 'KBL', 37602103, 9984670, 180),
  createData('Standard Chartered Bank Nepal Limited', 'SCB', 25475400, 7692024, 310),
  createData('Global IME Bank Limited', 'GBIME', 83019200, 357578, 225),
  createData('Sanima Bank Limited', 'SANIMA', 4857000, 70273, 200),
  createData('Agricaltural Development Bank Limited', 'ADBL', 126577691, 1972550, 183),
  createData('Prabhu Bank Limited', 'PRVU', 126317000, 377973, 187),
  createData('Nepal Investment Mega Bank Limited', 'NIMB', 67022000, 640679, 203),
  createData('Laxmi Bank Limited', 'LBL', 67545757, 242495, 191),
  createData('Siddartha Bank Limited', 'SBL', 146793744, 17098246, 219),
  createData('Citizens Bank International Limited', 'CZBIL', 200962417, 923768, 170),
  createData('Everest Bank Limited', 'EBL', 210147125, 8515767, 481),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.symbol}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
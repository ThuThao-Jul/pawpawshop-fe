import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, TableFooter, TablePagination} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const History = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.userReducer.paidOrders);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    let paidOrders = null;
    // let totalPages = 0;

    if(orders){
        paidOrders = orders.paidOrders;
        // totalPages = orders.totalPages;
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    useEffect(() => {
        dispatch(userActions.getPaidOrders({"page": page, "limit": rowsPerPage}))
    }, [dispatch, page, rowsPerPage]);

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Products</StyledTableCell>
            <StyledTableCell align="right">Subtotal</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paidOrders && paidOrders.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.updatedAt.split('T')[0]}
              </StyledTableCell>
              <StyledTableCell align="right">{row.order[0].product.name} {row.order.length-1>0 ? `and ${row.order.length-1} more product(s)` : ''}</StyledTableCell>
              <StyledTableCell align="right">{new Intl.NumberFormat('de-DE').format(row.totalCost)}</StyledTableCell>
              <StyledTableCell align="right">{row.discount*100 + '%'}</StyledTableCell>
              <StyledTableCell align="right">{new Intl.NumberFormat('de-DE').format(row.finalCost)}</StyledTableCell>
              <StyledTableCell align="right">{row.isDelivered ? 'Done' : 'Delivering'}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TableRow>
               <TablePagination
                  component="div"
                  count={paidOrders ? paidOrders.length : 0}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    )
};

export default History;
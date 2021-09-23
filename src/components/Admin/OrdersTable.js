import React, { useEffect, useState } from "react";
import Title from "./Title";
import {Table, TableBody, TableCell, TableHead, TableRow, Link, Switch, CircularProgress} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "../../redux/actions/admin.actions";
import { IconButton } from "@mui/material";
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

  

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.adminReducer.paidOrders);
  const totalPages = useSelector((state) => state.adminReducer.totalPages)
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    dispatch(adminActions.getPaidOrders(1,limit))
  }, [dispatch, limit])

  const handleChange = (e,id) => {
    console.log(e.target.checked, id)
    if (e.target.checked){
      dispatch(adminActions.putDelivery(id))
    }
  };

  const handleSeeMore = (e) => {
     e.preventDefault();
     console.log('see more')
     setLimit(limit+5)
  }

  const handleRefresh = (e) => {
    e.preventDefault();
    setLimit(5);
    dispatch(adminActions.getPaidOrders(1,5))
  }
    return (
        <React.Fragment>
          <div style={{display:"flex"}}>
          <Title>Paid Orders</Title>
          <IconButton onClick={handleRefresh}>
            <SyncRoundedIcon />
          </IconButton>
          </div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                {/* <TableCell>Payment Method</TableCell> */}
                <TableCell>Sale Amount (VND)</TableCell>
                <TableCell align="right">is Delivered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!orders ? (
                <CircularProgress />
              ) : ( orders &&
                orders.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>{row.updatedAt.split('T')[0]}</TableCell>
                    <TableCell>{row.owner.name}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    {/* <TableCell>{row.paymentMethod}</TableCell> */}
                    <TableCell>{`${new Intl.NumberFormat('de-DE').format(row.finalCost)}`}</TableCell>
                    <TableCell align="right">
                      <Switch {...label} color="primary"
                      defaultChecked = {row.isDelivered ? true : false}
                      disabled = {row.isDelivered ? true : false}
                      onChange={(e) => handleChange(e,row._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))

              )}
            </TableBody>
          </Table>
          <Link 
          color="primary" 
          href="#" 
          onClick={handleSeeMore} 
          sx={{ mt: 3 }}
          style={{display: totalPages===1 ? 'none' : 'block'}}
          >
            See more orders
          </Link>
        </React.Fragment>
      );
};

export default Orders;
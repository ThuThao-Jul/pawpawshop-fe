import React, { useEffect } from "react";
import Title from "./Title";
import {Typography, Link} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "../../redux/actions/admin.actions";

function preventDefault(event) {
    event.preventDefault();
  }

const TotalRevenue = () => {
    const dispatch = useDispatch();
    const revenue = useSelector((state) => state.adminReducer.totalRevenue);
    let totalRevenue = null;

    if(revenue) {
      totalRevenue=revenue[0].total;
    }
    
    useEffect(() => {
        dispatch(adminActions.getRevenue())
    }, [dispatch])
    
    return (
        <React.Fragment>
            <Title>Total revenue</Title>
      <Typography component="p" variant="h4">
        {totalRevenue && new Intl.NumberFormat('de-DE').format(totalRevenue) + ' VND'}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {'on ' + new Date()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
        </React.Fragment>
    )
};

export default TotalRevenue;
import React from "react";
import Title from "./Title";
import {Typography, Link} from "@mui/material";

function preventDefault(event) {
    event.preventDefault();
  }

const TotalRevenue = () => {
    return (
        <React.Fragment>
            <Title>Total revenue</Title>
      <Typography component="p" variant="h4">
        3.024.000 VND
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
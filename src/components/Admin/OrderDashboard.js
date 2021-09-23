import React from "react";
import {Container, Grid, Paper, Link, Typography } from "@mui/material";
import TotalRevenue from "./Revenue";
import Orders from "./OrdersTable";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} style={{marginTop:"10%"}}>
        {'Copyright © '}
        <Link color="inherit" href="/" target="_blank">
          PawPaw
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const OrderDashboard = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              {/* <Chart /> */} Something here
            </Paper>
          </Grid>

          {/* Recent revenue */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <TotalRevenue />
            </Paper>
          </Grid>

          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    )
};

export default OrderDashboard;
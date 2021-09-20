import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DeliveryForm from "../components/DeliveryForm/DeliveryForm";
import OrderDetail from "../components/OrderDetails/OrderDetails";


  

const OrderPage = () => {
    const order = useSelector((state) => state.userReducer.orders);
    const history = useHistory();
    return (
        <>
            {order ? (
        <Grid container style={{padding:"3%"}}>
                <DeliveryForm />
                <OrderDetail />
        </Grid>
            ) : (
        <Grid container style={{padding:"3%"}}>
            <Grid item xs={12} style={{height:"80vh", textAlign:"center", lineHeight:"6rem"}}>
                <Typography variant="h5" style={{fontFamily:"Suez One", color:"#3D087B"}}>
                    You haven't created any order yet. Let's go shopping and grab our wonderful products.
                </Typography>
                <Button 
                variant="contained" 
                style={{backgroundColor:"#FF3D68", color:"white", fontFamily:"Suez One"}}
                onClick={() => history.push('/products')}
                >
                    Go shopping
                </Button>
            </Grid>
        </Grid> 
            )}
       </>
    )
};

export default OrderPage;
import { Button, Divider, Grid, Typography, Stack } from "@mui/material";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import { productActions } from "../redux/actions/product.actions";
import { userActions } from "../redux/actions/user.actions";
import { CircularProgress } from "@material-ui/core";


const ProductDetail = () => {
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const product = useSelector((state) => state.productReducer.selectedProduct);
    console.log('product', product)

    useEffect(() => {
        dispatch(productActions.getSingleProduct(id))
    },[dispatch,id]);

    const handleMinus = (e) => {
        e.preventDefault();
        setQuantity(quantity-1);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setQuantity(quantity+1)
    }
    
    const handleCart= (e) => {
        e.preventDefault();
        dispatch(userActions.addToCart({"id": id, "quantity": quantity}))
    }
    return (
        <Grid container>
            {/* Product images */}
            {!product ? (
                <Grid container>
                <Stack 
                sx={{ width: '100%', color: 'grey.500' }} 
                spacing={2} 
                style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <CircularProgress />
                <Typography variant="h6" align="center">I'm on my way...Meow</Typography>
              </Stack>
                 </Grid>
            ) : (
                <Grid container>
                <Grid item xs={12} md={6} style={{margin:"3%"}}>
            <Carousel showArrows={true}>
                {product && product.images.map((i) => 
                <div>
                    <img src={i} alt=""/>
                </div>
                )}
            </Carousel>
            </Grid>

            {/* Product details */}
            <Grid item xs={12} md={5} style={{marginTop:"3%", color:"#3D087B", fontFamily:"Suez One"}}>
                <Typography variant="h4" style={{fontFamily:"Suez One"}}>{product.name}</Typography>
                <Divider />
                <Typography variant="h5" style={{fontFamily:"Suez One"}}>{new Intl.NumberFormat('de-DE').format(product.price)} VND</Typography>
                <br />
                <div style={{display:"flex"}}>
                <Button 
                style={{color:"#3D087B", marginRight:"15px"}} 
                disabled={quantity===1} 
                onClick={handleMinus}
                variant="outlined"
                >
                    -
                </Button>
                <p style={{width:"3%", textAlign:"center"}}>{quantity}</p>
                <Button style={{color:"#3D087B", marginLeft:"15px"}} onClick={handleAdd} variant="outlined">+</Button>
                </div> <br />

                <Button style={{backgroundColor:"#3D087B", color:"white", width:"30%"}} onClick={handleCart}>
                    <ShoppingCartIcon />
                    <Typography variant="h7" style={{fontFamily:"Suez One", marginLeft:"3%"}}>Add to cart</Typography>
                </Button>
                
                <br />
                <br />
                <br />
                <Typography variant="h6" style={{fontFamily:"Suez One"}}>Description:</Typography>
                <Typography variant="body1">{product.description}</Typography>
            </Grid>
            </Grid>
                )}
        </Grid>
    )
};

export default ProductDetail;
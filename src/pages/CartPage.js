import { Typography, Card, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";
import "./stylePage.css"


const CartPage = () => {
    const cart = useSelector((state) => state.userReducer.data.cart);
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(userActions.getUserProfile());
    // }, [dispatch])
    

    const handleDeleteProduct = (id) => {
        dispatch(userActions.addToCart({"id": id, "quantity": 0}))
    };

    const handleDeleteAll = (e) => {
        e.preventDefault();
        dispatch(userActions.deleteCart())
    }

    const handleClickOrder = (e) => {
      // e.preventDefault();
      dispatch(userActions.postOrder());
    }

    return (
        <div className="cartContainer">
            <Typography variant="h3" style={{fontFamily:'Suez One'}}>Your cart</Typography>

            {cart.length > 0 ? (
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div style={{width:"60%", textAlign:"right", marginBottom:"2%"}}>

                <Button 
                variant="contained" 
                style={{backgroundColor:"#3D087B", color:"white", fontFamily:"Suez One", width:"15%"}}
                onClick={handleClickOrder}
                component={Link} to='/order'
                >
                Checkout
                </Button>

                <Button variant="contained" style={{backgroundColor:"#FF2442", color:"white", fontFamily:"Suez One"}} onClick={handleDeleteAll}>
                   DELETE ALL
                </Button>
                </div>
                
                {cart && cart.map((c) => (
                <Card sx={{ maxWidth: 345 }} className="cart" key={c.product._id}>
          <CardMedia
            component="img"
            alt={c.product.name}
            height="250"
            image={c.product.images[0]}
          />
          <CardContent style={{color:"#3D087B", textDecoration:'none'}} component={Link} to={`/products/${c.product._id}`} >
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Suez One"}}>
              {c.product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {c.product.description}
            </Typography>
          </CardContent>
          <CardActions style={{margin:"5%", display:"block", color:"#3D087B"}}>
         
                <p style={{width:"3%", textAlign:"center"}}>Price:<b>{new Intl.NumberFormat('de-DE').format(c.product.price)}đ</b></p>
                <p style={{width:"3%", textAlign:"center"}}>Qty:<b>{c.quantity}</b></p>
    
                <Fab color="secondary" aria-label="delete" onClick={()=>handleDeleteProduct(c.product._id)}>
                   <DeleteRoundedIcon />
                </Fab>
            
          </CardActions>
        </Card>))}
        
        
        </div>
            ) : (
                // <div style={{height:"5rem"}}>
                <Typography variant="h6" style={{fontFamily:'Suez One', color: "#3D087B", height:"25rem", marginTop:"13%"}}>
                There is no product in your cart.
                <NavLink to="/products">Go shopping now.</NavLink>
            </Typography>
            // </div>
            )}



        </div>
    )
};

export default CartPage;
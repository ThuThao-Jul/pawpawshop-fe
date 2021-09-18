import { Typography, Card, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./stylePage.css"


const CartPage = () => {
    const cart = useSelector((state) => state.userReducer.cart);
    const qty = cart.map((c) => c.quantity);
    const [quantity, setQuantity] = useState(qty);
    console.log('cart', cart)

    const handleMinus = (e, value) => {
        e.preventDefault();
        console.log(value)
    };

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }
    return (
        <div className="cartContainer">
            <Typography variant="h3" style={{fontFamily:'Suez One'}}>Your cart</Typography>

            {/* Products display */}
            {cart && cart.map((c) => (
            <Card sx={{ maxWidth: 345 }} style={{display:"flex", width:"60%", marginBottom:"2%"}} key={c.product._id}>
      <CardMedia
        component="img"
        alt={c.product.name}
        height="200"
        image={c.product.images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {c.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {c.product.description}
        </Typography>
      </CardContent>
      <CardActions style={{margin:"5%", display:"block"}}>
      {/* <Button 
            style={{color:"#3D087B", marginRight:"15px"}} 
            disabled={quantity===1} 
            onClick={handleMinus}
            variant="outlined"
        >
            -
        </Button> */}
            <p style={{width:"3%", textAlign:"center"}}>Price:<b>{new Intl.NumberFormat('de-DE').format(c.product.price)}đ</b></p>
            <p style={{width:"3%", textAlign:"center"}}>Qty:<b>{c.quantity}</b></p>
        {/* <Button 
            style={{color:"#3D087B", marginLeft:"15px"}} 
            onClick={handleAdd} 
            variant="outlined"
        >
            +
        </Button> */}
      </CardActions>
    </Card>
            ))}
        </div>
    )
};

export default CartPage;
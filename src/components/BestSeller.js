import { Grid, Stack, Typography, Card, CardActionArea, CardMedia, CardContent, 
Button, CardActions } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/actions/product.actions";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import "./Products/ProductStyle.css"
import { Link } from "react-router-dom";
import {userActions} from "../redux/actions/user.actions";
import { CircularProgress } from "@material-ui/core";

const BestSeller = () => {
    const dispatch = useDispatch();
    const bestSellers = useSelector((state) => state.productReducer.bestSellers);
    const loading = useSelector((state) => state.productReducer.loading)
    useEffect(()=>{
        dispatch(productActions.getBestSellers())
    },[dispatch]);

    const handleCart= (id) => {
      dispatch(userActions.addToCart({"id": id, "quantity": 1}));
    }

    return (
        <Grid container style={{padding:"2% 6% 6% 6%"}}>
            <Grid item xs={12}>
            <Typography variant="h3" className="bestSeller" style={{fontFamily:"Suez One", marginBottom:"3%"}}>BEST SELLERS</Typography>
            </Grid>
        {loading ? (
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <CircularProgress />
              <Typography variant="h6" align="center">Restocking...Woof</Typography>
            </Stack>
        ) : (  bestSellers && bestSellers.map((b)=>
            <Grid item xs={12} md={3} key={b._id} className="productCard">
            <Card sx={{ maxWidth: 280 }}>
          <CardActionArea component={Link} to={`/products/${b._id}`}>
          <CardMedia
            component="img"
            height="200rem"
            image={b.images[0]}
            alt={b.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" align="center" noWrap>
              {b.name}
            </Typography>
            <Typography variant="body2" align="center" style={{color:"gray"}}>
              <b>{new Intl.NumberFormat('de-DE').format(b.price)} VND</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <ShareIcon color="action"/>
          </Button>
          <Button size="small" color="primary" onClick={()=>handleCart(b._id)}>
            <AddShoppingCartIcon  />
          </Button>
        </CardActions>
          </Card>
            </Grid>
            )
            )}
    </Grid>
    )
};

export default BestSeller;
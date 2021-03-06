import { Button, Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


const Shop=()=>{
    
    return (
        <div className="containerShop">
            <Grid container>
                <Grid item xs={12} md={6} className="product">
                    <List style={{width:"49%"}}>
                        <ListItem style={{ textAlign:"right"}}>
                            <Typography variant="h3" style={{fontFamily: 'Noto Serif', color:"#3D087B"}}> Our Products</Typography>
                        </ListItem>
                        <ListItem style={{textAlign:"right"}}>
                            <ListItemText style={{color:"gray"}}>Explore our fine selection of dry food, canned food and treats.</ListItemText>
                        </ListItem>
                        <ListItem style={{display:"flex", justifyContent:"flex-end", height:"30%"}}>
                            <Button variant="contained" color="secondary" size="large" style={{height:"50%"}} component={Link} to='/products'>Products</Button>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={12} md={6} className="service">
                    <List style={{width:"49%"}}>
                        <ListItem>
                            <Typography variant="h3" style={{fontFamily: 'Noto Serif', color:"#3D087B"}}> Our Services</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText style={{color:"gray"}}>Explore our amazing full services with the best veterinarians.</ListItemText>
                        </ListItem>
                        <ListItem style={{height:"30%"}}>
                            <Button variant="contained" color="secondary" size="large" style={{height:"50%"}}>Services</Button>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    )
};

export default Shop;
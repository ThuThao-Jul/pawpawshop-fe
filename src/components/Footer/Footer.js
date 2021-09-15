import React from "react";
import "./style.css";
import { Divider, Grid, Typography, TextField, Button } from "@material-ui/core";

const Footer = () => {
    return (
        <div className="footerContainer">
            <Grid container spacing={3} style={{padding:'3%'}}>
            <Grid item xs={12} md={6} lg={4}>
                <div style={{display:"flex"}} > 
                    <img src="https://i.ibb.co/PMYt7tW/logo.png" alt="logo" width="36" height="36" />
                    <Typography variant="h4" noWrap style={{fontFamily:'Noto Serif', color:"#3D087B"}}>
                      PawPaw
                    </Typography>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet, elit. Aenean ligula eget dolor</p>

                <div className="socialIcons">
                   <span className="icon"><i class="fab fa-facebook-f"></i></span>
                   <span className="icon"><i class="fab fa-twitter"></i></span>
                   <span className="icon"><i class="fab fa-instagram"></i></span>
                   <span className="icon"><i class="fab fa-youtube"></i></span>
                </div>  

                </div>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <h2 className="darkBlue">Contact Us</h2>
                <div className="contact">
                    <div>
                        <span><i class="fas fa-phone-alt"></i></span>
                        <p>(+1800) 456-789</p>
                    </div>
                    <div>
                        <span><i class="fas fa-envelope"></i></span>
                        <p>Contact@example.com</p>
                    </div>
                    <div>
                        <span><i class="fas fa-map-marker-alt"></i></span>
                        <p>Box 565, Charlestown,Nevis, West Indies, Caribbean</p>
                    </div>
                </div>
            </Grid>

            
            <Grid item xs={12} md={6} lg={4}>
                <h2 className="darkBlue">Newsletter</h2>
                <div>
                <form className="form" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Your email" variant="outlined" />
                    <Button variant="contained" color="secondary">
                       Subcribe
                    </Button>
                </form>

                </div>
            </Grid>
            </Grid>
            <Divider />
            <p style={{textAlign:"center"}}>Copyright © 2021. All Rights Reserved.</p>
        </div>
    )
};

export default Footer;
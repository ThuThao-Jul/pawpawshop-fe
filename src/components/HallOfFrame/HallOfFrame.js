import React from "react";
import { Typography, Grid, List, ListItem } from "@material-ui/core";
import MultilineChartRoundedIcon from '@material-ui/icons/MultilineChartRounded';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';
import "./style.css";


const HallOfFrame =() => {
    return (
        <div className="container">
            <Typography className="title" variant="h2" noWrap style={{fontFamily: 'Noto Serif'}}>
              Hall of Frame
            </Typography>
            <MultilineChartRoundedIcon fontSize="large" color="secondary"/>
            <Typography variant="h3" noWrap style={{fontFamily:'Suez One', color:"#FF3D68"}}>
                Pet of The Year
            </Typography>
            
            <Grid container spacing={3} className="content">
                <Grid item xs={12} md={6} lg={6}>
                    <img className="image" src="https://i.pinimg.com/564x/32/f2/43/32f24381b05fcf53d8088c98963fe326.jpg" height="100%" width="74%" alt="" />
                </Grid>
                <Grid item xs={12} md={6} lg={5} className="info">
                   <List>
                       <ListItem style={{gap:'8px'}}>
                          <PetsRoundedIcon color="secondary" fontSize="large"/>
                          <Typography variant="h6" style={{fontFamily:'Suez One'}}><b>Name:</b> Lyly</Typography>
                       </ListItem>
                       <ListItem style={{gap:'8px'}}>
                          <PetsRoundedIcon color="secondary" fontSize="large"/>
                          <Typography variant="h6" style={{fontFamily:'Suez One'}}><b>Age: </b>2 mths</Typography>
                       </ListItem>
                       <ListItem style={{gap:'8px'}}>
                          <PetsRoundedIcon color="secondary" fontSize="large"/>
                          <Typography variant="h6" style={{fontFamily:'Suez One'}}><b>Type:</b> British Shorthair</Typography>
                       </ListItem>
                       <ListItem style={{gap:'8px'}}>
                          <PetsRoundedIcon color="secondary" fontSize="large"/>
                          <Typography variant="h6" style={{fontFamily:'Suez One'}}><b>Owner:</b> Ashley</Typography>
                       </ListItem>
                       <ListItem style={{gap:'8px'}}>
                          <PetsRoundedIcon color="secondary" fontSize="large"/>
                          <Typography variant="h6" style={{fontFamily:'Suez One'}}><b>Interests:</b> Lorem ipsum dolor sit amet, elit</Typography>
                       </ListItem>
                   </List>
                </Grid>
            </Grid>
        </div>
    )
};

export default HallOfFrame;
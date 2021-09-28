import React from "react";
import { red } from '@mui/material/colors';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Card, CardHeader, Avatar, Box, Slider, Typography, CardContent, Grid, List, ListItemText} from "@material-ui/core"
import { useSelector } from "react-redux";
import AccountTab from "../components/AccountTab";


const MyAccount = () => {
    const user = useSelector((state) => state.userReducer.data);
    let min = 0;
    let max = 0;
    let marks =[];

    if(user && user.tier === "bronze") {
        min = 0;
        max = 800
      } else if (user && user.tier === "silver") {
        min = 800;
        max = 3500;
      } else if (user && user.tier === "gold") {
        min = 3500;
        max = 8000
      } else {
        min = 8000;
        max = 15000
      }
    
      if(user) {
        marks = [
          {
            value: max,    // equal to max
            label: max,
          },
          {
            value: user.point,       //user's current point
            label: user.point.toFixed(1)
          }
        ]
      };

  
    return (
        <Grid container style={{padding: "1%"}}>
            <Card sx={{ maxWidth: 345 }} style={{width:"100%", display:"flex"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <PersonOutlineIcon />
          </Avatar>
        }
        title={user.name}
        subheader={user.tier + ' member'}
      />

      <Box width={400} style={{margin:"3% 12% 0 12%"}}>
      <Slider 
      size="large"
      marks={marks} 
      disabled 
      style={{color:"#3D087B"}} 
      value={user.point} 
      aria-label="Default"
      min={min}
      max={max}
      />
        <Typography variant="body2" style={{textAlign:"right"}}>
          <b>{max - user.point}</b> more points to advance to the next tier.
        </Typography>
      </Box>

      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Reminder
          </Typography>
          <List>
              <ListItemText>
                 Lucky should be dewormed tomorrow.
              </ListItemText>
              <ListItemText>
                  Apple should be vaccinated on Oct 1.
              </ListItemText>
          </List>
      </CardContent>
      </Card>

      <AccountTab />
      </Grid>
    )
};

export default MyAccount;
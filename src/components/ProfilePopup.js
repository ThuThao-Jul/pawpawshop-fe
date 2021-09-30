import React, { useEffect} from "react";
import { Backdrop, Card, CardHeader, 
  Avatar, IconButton, Slider, Box, Typography } from "@material-ui/core";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CloseIcon from '@material-ui/icons/Close';
import { red } from '@mui/material/colors';
import {useDispatch, useSelector} from "react-redux";
import { userActions } from "../redux/actions/user.actions";




const ProfilePopup = ({openProfile, setOpenProfile}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.data)
  let min = 0;
  let max = 0;
  let marks =[]

  useEffect(() => {
     dispatch(userActions.getUserProfile())
  }, [dispatch])

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
        label: user.point.toFixed()
      }
    ]
  }

  const handleClose = () => {
      setOpenProfile(false);
  };
    

    return ( user &&
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openProfile}
        style={{zIndex:"10"}}
      >

<Card sx={{ maxWidth: 345 }} style={{width:"35%", paddingBottom:"2%"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <PersonOutlineIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
        title={user.name}
        subheader={user.tier + ' member'}
      />
      <Box width={400} style={{marginLeft:"12%"}}>
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
          <b>{(max - user.point).toFixed()}</b> more points to advance to the next tier.
        </Typography>
      </Box>
  
    </Card> 
      
      </Backdrop>
    )
};

export default ProfilePopup
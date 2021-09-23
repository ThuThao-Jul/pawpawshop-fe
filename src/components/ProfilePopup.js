import React, { useState } from "react";
import { Backdrop, Card, CardHeader, 
  Avatar, IconButton, Slider, CardContent, CardActions, 
  Collapse, Box, Typography, CardActionArea, CardMedia, Grid, Fab, Tooltip } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { red } from '@mui/material/colors';
import { useHistory } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const marks = [
  {
    value: 10,     //equal to min
    label: 10
  },
  {
    value: 100,    // equal to max
    label: 100,
  },
  {
    value: 50,       //user's current point
    label: 50
  }
]


const ProfilePopup = ({openProfile, setOpenProfile}) => {
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
      setOpenProfile(false);
  };
    
  const handleClickPet = () => {
    setOpenProfile(false);
    history.push('/pet/create');
  }

    return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openProfile}
        style={{zIndex:"10"}}
      >



<Card sx={{ maxWidth: 345 }} style={{width:"35%"}}>
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
        title="Thao"
        subheader="Silver member"
      />
      <Box width={400} style={{marginLeft:"12%"}}>
      <Slider 
      size="large"
      marks={marks} 
      disabled 
      style={{color:"#3D087B"}} 
      defaultValue={50} 
      aria-label="Default"
      min={10}
      max={200}
      />
        <Typography variant="body2" style={{textAlign:"right"}}>
          <b>50</b> more points to become Gold Member
        </Typography>
      </Box>
      {/* <CardContent>
      </CardContent> */}
      <CardActions disableSpacing style={{marginLeft:"2%"}}>
        <Typography variant="h6">
          My pets
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:'4%'}}>
          <Typography variant="subtitle2">Your family has 3 members.</Typography>
        <Tooltip title="Add" placement="left-start">
          <Fab color="primary" aria-label="add" size="small" onClick={handleClickPet}>
            <AddIcon />
          </Fab>
        </Tooltip>
          </div>
          <Grid container>

            <Grid item xs={12} md={6}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images-na.ssl-images-amazon.com/images/I/71%2BmDoHG4mL.png"
          alt="cat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lyly
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    </Grid>
        </CardContent>
      </Collapse>
    </Card> 
      
      
      
      </Backdrop>
    )
};

export default ProfilePopup
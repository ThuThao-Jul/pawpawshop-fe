import React, { useState, useEffect} from "react";
import { red } from '@mui/material/colors';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Card, CardHeader, Avatar, Box, Slider, Typography, CardContent, Grid, List, ListItemText} from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux";
import AccountTab from "../components/AccountTab";
import { petAction } from "../redux/actions/pet.actions";


const MyAccount = () => {
  const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.data);
    const [reminder, setReminder] = useState([]);
    console.log(reminder)
    let min = 0;
    let max = 0;
    let marks =[];
    const pets = useSelector((state) => state.petReducer.data)
    const d = new Date();
    const recent = d.getTime();

    const Deworming = (recordDate) => {
      const r = new Date(recordDate);
      const lastTime = r.getTime();
      const nextTime = lastTime + 1000*60*60*24*90 // 3 mths/time
      return ((nextTime - recent)/(1000*60*60*24)).toFixed(0)
    }

    const Vaccination = (recordDate) => {
      const r = new Date(recordDate);
      const lastTime = r.getTime();
      const nextTime = lastTime + 1000*60*60*24*365 // 1y/time
      return ((nextTime - recent)/(1000*60*60*24)).toFixed(0)
    }

    useEffect(() => {
        if(user){
            dispatch(petAction.getAllPets(user._id));
            pets && pets.map((d) => {
              if (d.dewormingDate){
                if (Deworming(d.dewormingDate) <= 3 && Deworming(d.dewormingDate) >= 0){
                  console.log('deworm', d.name)
                   setReminder([...reminder,`${d.name} should be dewormed within the next ${Deworming(d.dewormingDate)} day(s)`]);
                };
              }; 
              
                if (d.vaccinationRecord){
                  if (Vaccination(d.vaccinationRecord) <= 3 && Vaccination(d.vaccinationRecord) >=0){
                    console.log('vaccination', d.name)
                    setReminder([...reminder,`${d.name} should be vaccinated within the next ${Vaccination(d.vaccinationRecord)} day(s)`]);
                  }
                };
                return reminder
              })
           
        };
      // eslint-disable-next-line
    }, [dispatch,user]);
    

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
          <b>{(max - user.point).toFixed()}</b> more points to advance to the next tier.
        </Typography>
      </Box>

      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Reminder
          </Typography>
          <List>
            {reminder && reminder.map((r) => 
              <ListItemText>
                 {r}
              </ListItemText>
            )}
              {/* <ListItemText>
                  Apple should be vaccinated on Oct 1.
              </ListItemText> */}
          </List>
      </CardContent>
      </Card>

      <AccountTab />
      </Grid>
    )
};

export default MyAccount;
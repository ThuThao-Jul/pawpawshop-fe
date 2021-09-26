import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Button, CardActions, CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/actions/pet.actions";


const Pets = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.data)
    const pets = useSelector((state) => state.petReducer.data);
    let userId = '';

    if (user) {
        userId = user._id
    }

    useEffect(() => {
        dispatch(petAction.getAllPets(userId))
    }, [dispatch, userId]);

    return (
        <Grid container>
            {pets ? (
            <Grid container>
            {pets && 
            <Grid container style={{width:"100%"}}>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Your family has {pets.length} members.
                </Typography>
            </Grid>
        {pets && pets.map((p) => 
            <Grid item xs={12} md={4} lg={3} 
            key = {p._id}
            style={{margin:"3%"}}
            >
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={p.image ? p.image : 'https://i.pinimg.com/originals/c6/73/6c/c6736cd7880d0b78171d4afcb0f3b870.jpg'}
          alt={p.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {p.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {p.breed ? p.breed : 'unknown'}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Age: {p.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {p.description ? p.description : ''}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <EditIcon />
        </Button>
        <Button size="small" color="primary">
          <DeleteRoundedIcon />
        </Button>
      </CardActions>
    </Card>
            </Grid> 
        )}
            </Grid>
            }
          </Grid>  ) : (
              <CircularProgress />
          )}
  
        </Grid>
    )
};

export default Pets
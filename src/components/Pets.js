import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, 
  Button, CardActions, Tooltip, Fab } from "@material-ui/core";
import React, { useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/actions/pet.actions";
import { Link } from "react-router-dom";



const Pets = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.data)
    const pets = useSelector((state) => state.petReducer.data);
    let userId = '';


    if (user) {
        userId = user._id
    };

    const handleDelete = (petId) => {
      dispatch(petAction.deletePet({"ownerId": user._id, "petId": petId}))
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
            <Grid item xs={12} style={{display:"flex", justifyContent:"space-between"}}>
                <Typography variant="h6">
                    Your family has {pets.length} members.
                </Typography>

                <Tooltip title="Add" placement="left-start">
                  <Fab color="primary" aria-label="add" size="small" component={Link} to='/pet/create'>
                    <AddIcon />
                  </Fab>
                </Tooltip>
            </Grid>
        {pets && pets.map((p) => 
            <Grid item xs={12} md={4} lg={3} 
            key = {p._id}
            style={{margin:"3%"}}
            >
              {/* <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete your pet?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this pet?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleDelete(p._id)}>{p._id}</Button>
          <Button onClick={()=> setOpen(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog> */}
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
          {p.male ? <MaleRoundedIcon color="primary" /> : <FemaleRoundedIcon color="error" />}
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
        <Button size="small" color="error" onClick={()=>handleDelete(p._id)}>
          <DeleteRoundedIcon color="error" />
        </Button>
      </CardActions>
    </Card>

            </Grid> 
        )}
            </Grid>
            }
          </Grid>  ) : (
              // <CircularProgress />
              <Typography variant="h6">
                You haven't created any pet profile yet.
              </Typography>
          )}
  
        </Grid>
    )
};

export default Pets
import { Button, Grid, Typography} from "@material-ui/core";
import React from "react";


const NewArrival = () => {
    return (
        <Grid container style={{marginTop:"3%", marginBottom:"4%", height:"20rem"}}>
            <Grid item xs={12} md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
               <Typography variant="h2" style={{fontFamily: "Suez One", color:"#3D087B"}}>
                   New arrival
               </Typography>
               <Button variant="contained" color="secondary">Explore now</Button>
            </Grid>

            <Grid xs={12} md={6} style={{textAlign:"center"}}>
           <iframe width="75%" height="100%" src="https://www.youtube.com/embed/jffy6vxqLOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
        </Grid>
    )
};

export default NewArrival;
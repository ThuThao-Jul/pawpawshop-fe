import React from "react";
import {RadioGroup, FormControlLabel, Radio, Typography, 
    Grid, TextField, FormLabel, IconButton, Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

  
const CreateNewPet = () => {
  // const [value, setValue] = useState(new Date());
  const myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'dmgak3gru', 
    uploadPreset: 'jn245z5u'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

    return (
        <>
            <Typography variant="h3" style={{fontFamily:"Suez One", color:"#3D087B", textAlign:"center", marginTop:"2%"}}>
                Create a new pet
            </Typography>
    <Grid container className="createPetForm">
        <form autoComplete="off">
            <Typography variant="subtitle2">1. What is your type of pet?</Typography>
    <RadioGroup 
          name="use-radio-group" 
          defaultValue="dog"
          style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}
    > 

          <FormControlLabel 
          value="dog" 
          label={<i class="fas fa-dog" style={{color:"#FF3D68", fontSize:"2rem"}}></i>} 
          control={<Radio />} 
          />

          <FormControlLabel 
          value="cat" 
          label={<i class="fas fa-cat" style={{color:"#FF3D68", fontSize:"2rem"}}></i>} 
          control={<Radio />} 
          />

          <FormControlLabel 
          value="other" 
          label={<><p><i class="fas fa-dove" style={{color:"#FF3D68", fontSize:"2rem"}} ></i>Other</p></>} 
          control={<Radio />} 
          />        
            
          </RadioGroup>

        <TextField id="breed" label="Breed" type='text' variant="outlined" placeholder="Alaska, Husky, British Shorthair,..." style={{marginBottom:"5%"}}/>

        <Typography variant="subtitle2">2. Your pet information</Typography>
            <TextField required id="name" label="Name" type='text' variant="outlined" fullWidth />
            <TextField required id="age" label="Age" type='number' variant="outlined" placeholder="0 if your pet is under 1 year-old." />
            <TextField
              variant="outlined"
              id="date"
              label="Birthday"
              type="date"
              // defaultValue={value}
              sx={{ width: 220 }}
              InputLabelProps={{
              shrink: true,
             }}
            />
            <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="female">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>

      <TextField multiline id="description" variant="outlined" label="Description" type="text" placeholder="Interests, characteristic..."/>
       
      <FormLabel component="legend">Upload image</FormLabel>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={myWidget.open}>
          <PhotoCamera />
        </IconButton>

    <Typography variant="subtitle2">3. Records</Typography>
    <TextField
        variant="outlined"
        id="deworming-date"
        label="The lastest deworming date"
        type="date"
        defaultValue={new Date()}
        sx={{ width: 220 }}
        InputLabelProps={{
        shrink: true,
        }}
    />
    <TextField
        variant="outlined"
        id="vaccination"
        label="The lastest vaccination date"
        type="date"
        defaultValue={new Date()}
        sx={{ width: 220 }}
        InputLabelProps={{
        shrink: true,
        }}
    />
    <TextField 
        multiline 
        id="medical-record" 
        label="Medical record" 
        type='text' 
        variant="outlined" 
        placeholder="anamnesis" 
    />
    
    <div>
    <Button type="submit" variant="contained" style={{backgroundColor:"#3D087B", color:"white"}}>Create</Button>
    </div>
        </form>
    </Grid>
    </>
    )
};

export default CreateNewPet;
import React, { useState } from "react";
import {RadioGroup, FormControlLabel, Radio, Typography, 
    Grid, TextField, FormLabel, IconButton, Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

  
const CreateNewPet = () => {
  // const [value, setValue] = useState(new Date());
  const [pet, setPet] = useState({
    "type":'dog',
    "breed": '',
    "name": '',
    "age": null,
    "birthday": null,
    "male": false,
    "description": null,
    "image": '',
    "dewormingDate": null,
    "vaccinationRecord": null,
    "medicalRecord": null,
  });
  console.log('pet', pet);

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

  const handleBirthday = (e) => {
    setPet({...pet, "birthday": e.target.value})
  }

  const handleType = (e) => {
    setPet({...pet, "type": e.target.value})
  }

  const handleBreed = (e) => {
    setPet({...pet, "breed": e.target.value})
  }

  const handleName = (e) => {
    setPet({...pet, "name": e.target.value})
  }

    return (
        <div style={{width:"50%", position:"relative", left:"25%"}}>
            <Typography variant="h3" style={{fontFamily:"Suez One", color:"#3D087B", textAlign:"center", marginTop:"2%"}}>
                Create a new pet
            </Typography>
    <Grid container style={{display:"flex", justifyContent:"center"}} >
        <form autoComplete="off" className="createPetForm">
            <Typography variant="subtitle2">1. What is your type of pet?</Typography>
    <RadioGroup 
          name="use-radio-group" 
          defaultValue={pet.type}
          onChange={handleType}
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

        <TextField 
        id="breed" 
        label="Breed" 
        type='text' 
        variant="outlined" 
        placeholder="Alaska, Husky, British Shorthair,..." 
        onChange={handleBreed}
        style={{marginBottom:"5%"}}
        />

        <Typography variant="subtitle2">2. Your pet information</Typography>
            <TextField required id="name" label="Name" type='text' variant="outlined" onChange={handleName} fullWidth />
            <div style={{margin:"4% 0 4% 0", display:"flex", justifyContent:"space-between"}}>
            <TextField required id="age" label="Age" type='number' variant="outlined" placeholder="0 if your pet is under 1 year-old." />
            <TextField
              variant="outlined"
              id="date"
              label="Birthday"
              type="date"
              // defaultValue={value}
              sx={{ width: 220 }}
              onChange={handleBirthday}
              InputLabelProps={{
              shrink: true,
             }}
            />
            </div>
            <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="female">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>

      <TextField multiline fullWidth id="description" variant="outlined" label="Description" type="text" placeholder="Interests, characteristic..."/>
       
      <div style={{margin: "4% 0 2% 0"}}>
      <FormLabel component="legend">Upload image</FormLabel>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={myWidget.open}>
          <PhotoCamera />
        </IconButton>
      </div>

    <Typography variant="subtitle2">3. Records</Typography>
    <div className="record" >
    <TextField
        variant="outlined"
        id="deworming-date"
        label="The last deworming date"
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
        label="The last vaccination date"
        type="date"
        defaultValue={new Date()}
        sx={{ width: 220 }}
        InputLabelProps={{
        shrink: true,
        }}
    />
    </div>
    <div style={{marginBottom:"4%"}}>
    <TextField 
        fullWidth
        multiline 
        id="medical-record" 
        label="Medical record" 
        type='text' 
        variant="outlined" 
        placeholder="anamnesis" 
    />
    </div>
    
    <div style={{textAlign:"center"}}>
    <Button type="submit" variant="contained" style={{backgroundColor:"#3D087B", color:"white"}}>Create</Button>
    </div>
        </form>
    </Grid>
    </div>
    )
};

export default CreateNewPet;
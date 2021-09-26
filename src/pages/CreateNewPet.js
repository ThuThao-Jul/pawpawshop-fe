import React, { useState } from "react";
import {RadioGroup, FormControlLabel, Radio, Typography, 
    Grid, TextField, FormLabel, IconButton, Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { petAction } from "../redux/actions/pet.actions";

  
const CreateNewPet = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.data);
  let userId = '';
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

  if (user){
    userId = user._id;
  }

  const myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'dmgak3gru', 
    uploadPreset: 'jn245z5u'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        setPet({...pet, "image": result.info.url})
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
  };

  const handleAge = (e) => {
    setPet({...pet, "age": e.target.value})
  };

  const handleGender = (e) => {
    if(e.target.value === "male"){
      setPet({...pet, "male": true})
    } else {
      setPet({...pet, "male": false})
    }
  };

  const handleDescription = (e) => {
    setPet({...pet, "description": e.target.value})
  };

  const handleDeworming = (e) => {
    setPet({...pet, "dewormingDate": e.target.value})
  };

  const handleVaccination = (e) => {
    setPet({...pet, "vaccinationRecord": e.target.value})
  };

  const handleMedical = (e) => {
    setPet({...pet, "medicalRecord": e.target.value})
  };

  const handleNewPet = (e) => {
    e.preventDefault();
    console.log('submit new pet')
    dispatch(petAction.postNewPet({"pet": pet}, userId));
  };

    return (
        <div style={{width:"50%", position:"relative", left:"25%"}}>
            <Typography variant="h3" style={{fontFamily:"Suez One", color:"#3D087B", textAlign:"center", marginTop:"2%"}}>
                Create a new pet
            </Typography>
    <Grid container style={{display:"flex", justifyContent:"center"}} >
        <form autoComplete="off" className="createPetForm" onSubmit={handleNewPet}>
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
            <TextField required id="age" label="Age" type='number' variant="outlined" placeholder="0 if your pet is under 1 year-old." onChange={handleAge} />
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
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="female" onChange={handleGender}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>

      <TextField multiline fullWidth id="description" variant="outlined" label="Description" type="text" placeholder="Interests, characteristic..." onChange={handleDescription}/>
       
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
        onChange={handleDeworming}
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
        onChange={handleVaccination}
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
        onChange={handleMedical}
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
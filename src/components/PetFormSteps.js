import React, {useState} from "react";
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
import { FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const PetFormData = () => {
    const [value, setValue] = useState(new Date());
    
    const handleChange = (newValue) => {
        setValue(newValue);
    };

}
const steps = [
    {
      label: 'What is your type of pet?',
      description: (
        <div>
          <RadioGroup 
          name="use-radio-group" 
          defaultValue="dog"
          style={{width:"130%",display:"flex", flexDirection:"row", justifyContent:"space-around"}}>

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

        <TextField id="breed" label="Breed" type='text' variant="outlined" placeholder="Alaska, Husky, British Shorthair,..." fullWidth  style={{marginBottom:"5%"}}/>
        </div>
      ),
    },
    {
      label: 'Your pet information',
      description: (
         <form autoComplete="off">
             <TextField required id="name" label="Name" type='text' variant="outlined" fullWidth />
             <TextField required id="age" label="Age" type='number' variant="outlined" fullWidth placeholder="0 if your pet is under 1 year-old." />
             <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
         </form>
      ),
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

export const PetFormSteps ={PetFormData, steps};
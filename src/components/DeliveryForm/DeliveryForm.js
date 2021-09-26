import React, {useState} from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { pink } from '@mui/material/colors';
import { TextField, Autocomplete, FormControlLabel, Checkbox } from "@mui/material";
// import { IMaskInput } from 'react-imask';
// import PropTypes from 'prop-types';
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/actions/user.actions";


// const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
//     const { onChange, ...other } = props;
//     return (
//       <IMaskInput
//         {...other}
//         mask="#000 000 000"
//         definitions={{
//           '#': /[0]/,
//         }}
//         inputRef={ref}
//         onAccept={(value) => onChange({ target: { name: props.name, value } })}
//         overwrite
//       />
//     );
//   });
  
// TextMaskCustom.propTypes = {
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

const DeliveryForm = () => {
  const order = useSelector((state) => state.userReducer.orders)
  const user = useSelector((state) => state.userReducer.data)
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    "address": '',
    "phone": ''
  })
  console.log(contact);

  const handleSubmit=(e) => {
    e.preventDefault();
    dispatch(userActions.putPayment({"id": order._id, "address": contact.address, "phone": contact.phone}))
  }

  const handleAddress = (e) => {
    setContact({...contact, "address": e.target.value})
  }
  const handlePhone = (e) => {
    setContact({...contact, "phone": e.target.value})
  }
    return (
        <Grid item xs={12} md={6} className="delivery">
          <Typography variant="h5" style={{fontFamily:"Suez One", color:"#FF3D68"}}>
            Contact information
          </Typography>
        <form
            className="deliveryForm"
            autoComplete="on"
            onSubmit={handleSubmit}
        >
                <TextField required id="name" label="Name" placeholder="Recipient name" defaultValue={user.name} />
                <TextField 
                required 
                onChange={handlePhone}
                type="text"
                id="phone-number" 
                label="Phone" 
                placeholder="Start with '0' & contain 10 digrits" 
                />
                <TextField required multiline id="address" label="Address" placeholder="Your address" onChange={handleAddress}/>
                <Autocomplete
      disablePortal
      id="payment-method"
      options={["Cash", "Internet banking", "Visa"]}
      renderInput={(params) => <TextField {...params} label="Payment method" required/>}
    />

                <FormControlLabel 
                control={<Checkbox defaultChecked size="small" sx={{
                  color: pink[600],
                  '&.Mui-checked': {
                    color: pink[500],
                  },
                }}
                icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                />} 
                label="Save this for next time" />  

                <Button variant="contained" color="secondary" type="submit">
                  Confirm & pay
                </Button>
        </form>
        </Grid>
    
    )
};

export default DeliveryForm;
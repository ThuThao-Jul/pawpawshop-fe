import { Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";
import "./stylePage.css";


const Register=()=>{
    const registered = useSelector((state) => state.userReducer.data);
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        "email": null,
        "password": null,
        "name": null,
    });
    console.log(user);

    if(registered){
        history.push('/login');
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(userActions.postRegister(user)) 
    }

    return (
        <div className="containerRegister">
            <Typography variant='h2' style={{fontFamily:'Noto Serif', color:"#3D087B", textAlign:"center"}}> Register</Typography>

            <form className="registerForm" autoComplete="on" onSubmit={handleSubmit}>
               <div><TextField required id="name" label="Name" type="text" variant="outlined" fullWidth onChange={(e) => setUser({...user, "name": e.target.value})}/> </div>
               <div><TextField required id="email" label="Email" type="email" variant="outlined" fullWidth onChange={(e) => setUser({...user, "email": e.target.value})} /> </div>
               <div><TextField required id="password" label="Password" type="password" variant="outlined" fullWidth onChange={(e) => setUser({...user, "password": e.target.value})} /> </div>
               <div>
                   <Button type="submit" variant="contained" color="secondary">Submit</Button>
                   <p>Already had an account? <a href="/login">Log in now</a></p>
               </div>
            </form>
        </div>
    )
};

export default Register;
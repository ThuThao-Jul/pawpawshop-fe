import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";
import { useHistory } from "react-router-dom";


const LogIn =()=>{
    const loggedIn = useSelector((state) => state.userReducer.login);
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        "email": null,
        "password": null,
    });
    console.log(user);

    if(loggedIn) {
        history.push("/")
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        dispatch(userActions.postLogIn(user))
    }
    return (
        <div className="containerRegister logIn">
             <Typography variant='h2' style={{fontFamily:'Noto Serif', color:"#3D087B", textAlign:"center"}}> Log in</Typography>

            <form className="registerForm" autoComplete="on" onSubmit={handleSubmit}>
                <div><TextField required id="email" label="Email" type="email" variant="outlined" fullWidth onChange={(e) => setUser({...user, "email": e.target.value})} /> </div>
                <div><TextField required id="password" label="Password" type="password" variant="outlined" fullWidth onChange={(e) => setUser({...user, "password": e.target.value})} /> </div>
                <div>
                   <Button type="submit" variant="contained" color="secondary">Submit</Button>
                   <p>Don't have account? <a href="/register">Register now</a></p>
                </div>
            </form>
        </div>
    )
};

export default LogIn
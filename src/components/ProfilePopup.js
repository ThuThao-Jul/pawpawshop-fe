import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";


const ProfilePopup = ({openProfile, setOpenProfile}) => {
    const handleClose = () => {
        setOpenProfile(false);
      };
    return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openProfile}
        onClick={handleClose}
        style={{zIndex:"10"}}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
};

export default ProfilePopup
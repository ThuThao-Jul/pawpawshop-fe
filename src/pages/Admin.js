import React from "react";
import DashboardContent from "../components/Admin/Dashboard";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";


const Admin = () => {
    const loggedIn = useSelector((state) => state.adminReducer.login);
    const history = useHistory();

    if (!loggedIn) {
        history.push('/admin/login')
    };
    
    return (
        <DashboardContent />
    )
};

export default Admin;
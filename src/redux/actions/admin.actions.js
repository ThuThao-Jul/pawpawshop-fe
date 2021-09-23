import api from "../../apiService";
import * as types from "../constants/admin.constants";


const postAdminLogIn = (admin) => async (dispatch)=> {
    dispatch({ type: types.POST_ADMINLOGIN_REQUEST, payload: null});

    try {
        let url = "/auth/login";
        const res = await api.post(url, admin);
        localStorage.setItem('adminToken', res.data.data.accessToken);
        api.defaults.headers.common["authorization"]= "Bearer " + res.data.data.accessToken;
        console.log("api", res.data.data.accessToken)
        dispatch({ type: types.POST_ADMINLOGIN_SUCCESS, payload: res.data.data});
    } catch (error) {
        dispatch({ type: types.POST_ADMINLOGIN_FAILURE, payload: error});
    }
};

export const adminActions = {postAdminLogIn}
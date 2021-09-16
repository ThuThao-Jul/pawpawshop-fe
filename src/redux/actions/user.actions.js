import { toast } from "react-toastify";
import api from "../../apiService";
import * as types from "../constants/user.constants";


const postRegister = (user) => async (dispatch) => {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = "/auth/register";
        console.log(url);
        const res = await api.post(url, user);
        console.log("success", res);
        toast.success('Your new account has been created successfully! Please log in.');
        dispatch({ type: types.POST_USER_SUCCESS, payload: res.data.data.user})
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.POST_USER_FAILURE, payload: error});
    }
};

const postLogIn = (user) => async (dispatch)=> {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = "/auth/login";
        const res = await api.post(url, user);
        console.log("success", res);
        localStorage.setItem('accessToken', res.data.data.accessToken);
        toast.success('Logged in successfully. Enjoy shopping at PawPaw <3');
        dispatch({ type: types.POST_USERLOGIN_SUCCESS, payload: res.data.data});
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.POST_USERLOGIN_FAILURE, payload: error});
    }
};

const logOut = () => async (dispatch) => {
    dispatch({type: types.POST_USER_REQUEST, payload: null});

    try {
        localStorage.setItem('accessToken', null);
        toast.success('Logged out successfully. See you again.');
        dispatch({type: types.POST_LOGOUT_SUCCESS, payload: null});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.POST_LOGOUT_FAILURE, payload: error});
    }
}

export const userActions = {postRegister, postLogIn, logOut};
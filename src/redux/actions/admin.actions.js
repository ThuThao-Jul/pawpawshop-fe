import { toast } from "react-toastify";
import adminApi from "../../adminApi";
import * as types from "../constants/admin.constants";


const postAdminLogIn = (admin) => async (dispatch)=> {
    dispatch({ type: types.POST_ADMINLOGIN_REQUEST, payload: null});

    try {
        let url = "/auth/login";
        const res = await adminApi.post(url, admin);
        localStorage.setItem('adminToken', res.data.data.accessToken);
        adminApi.defaults.headers.authorization= "Bearer " + res.data.data.accessToken;
        console.log("api", res.data.data.accessToken)
        if(res.data.data.user.role === "admin") {
            dispatch({ type: types.POST_ADMINLOGIN_SUCCESS, payload: res.data.data});
        } else {toast.error('Log in failed.')} 
    } catch (error) {
        dispatch({ type: types.POST_ADMINLOGIN_FAILURE, payload: error});
    }
};


const getRevenue = () => async (dispatch) => {
    dispatch({ type: types.POST_ADMINLOGIN_REQUEST, payload: null});
    
    try {
        adminApi.defaults.headers.common["authorization"]= "Bearer " + localStorage.getItem('adminToken');
        let url = '/admin/revenue';
        console.log(url)
        const res = await adminApi.get(url);
        dispatch({type: types.GET_REVENUE_SUCCESS, payload: res.data.data.revenue})
    } catch (error) {
        dispatch({type: types.GET_REVENUE_FAILURE, payload: error})
    }
};


const getPaidOrders = (page, limit) => async (dispatch) => {
    dispatch({ type: types.POST_ADMINLOGIN_REQUEST, payload: null});

    try {
        let url = `/admin/orders?page=${page}&limit=${limit}`;
        console.log(url);
        const res = await adminApi.get(url);
        dispatch({type: types.GET_ORDERS_SUCCESS, payload: res.data.data})
    } catch (error) {
        dispatch({type: types.GET_ORDERS_FAILURE, payload: error})
    }
};


const putDelivery = (orderId) => async (dispatch) => {
    dispatch({ type: types.POST_ADMINLOGIN_REQUEST, payload: null});

    try {
        let url = `/admin/orders/${orderId}`;
        console.log(url);
        await adminApi.put(url);
        toast.success('Delivered successfully.')

        //get updated undelivered orders
        const res = await adminApi.get('/admin/orders')
        dispatch({type: types.PUT_ORDERS_SUCCESS, payload: res.data.data})
    } catch (error) {
        dispatch({type: types.PUT_ORDERS_FAILURE, payload: error})
    }
};

const postAdminLogout = () => async (dispatch) => {
    dispatch({ type: types.POST_ADMINLOGIN_REQUEST, payload: null});

    try {
        localStorage.removeItem('adminToken');
        delete adminApi.defaults.headers.authorization;
        toast.success('Logged out successfully. See you again.');
        dispatch({type: types.POST_ADMINLOGOUT_SUCCESS, payload: null})
    } catch (error) {
        dispatch({type: types.POST_ADMINLOGOUT_FAILURE, payload: error})
    }
}

export const adminActions = {postAdminLogIn, getRevenue, getPaidOrders, putDelivery, postAdminLogout}
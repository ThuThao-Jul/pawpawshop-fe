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
        localStorage.setItem('accessToken', res.data.data.accessToken);
        api.defaults.headers.authorization= "Bearer " + res.data.data.accessToken;
        console.log("api", res.data.data.accessToken);
        // console.log('api header', api.defaults.headers.common["authorization"])
        toast.success('Logged in successfully. Enjoy shopping at PawPaw <3');
        dispatch({ type: types.POST_USERLOGIN_SUCCESS, payload: res.data.data});
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.POST_USERLOGIN_FAILURE, payload: error});
    }
};

const getUserProfile= () => async (dispatch) => {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        // api.defaults.headers.common["authorization"]= "Bearer " + localStorage.getItem('accessToken')
        let url = "/user/me";
        console.log(url);
        const res = await api.get(url);
        dispatch({ type: types.GET_USERPROFILE_SUCCESS, payload: res.data.data.user})
    } catch (error) {
        // toast.error(error.message);
        dispatch({type: types.GET_USERPROFILE_FAILURE, payload: error});
    }
}

const logOut = () => async (dispatch) => {
    dispatch({type: types.POST_USER_REQUEST, payload: null});

    try {
        localStorage.removeItem('accessToken');
        delete api.defaults.headers.authorization;
        toast.success('Logged out successfully. See you again.');
        dispatch({type: types.POST_LOGOUT_SUCCESS, payload: null});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.POST_LOGOUT_FAILURE, payload: error});
    }
}

const addToCart = ({id,quantity}) => async (dispatch) => {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = `/user/cart/${id}`;
        console.log(url);
        await api.post(url, {quantity});

        if (quantity > 0) {
            toast.success('This product has been added to your cart.');
        } else {
            toast.success('Product deleted.')
        }
        // console.log('local storage', localStorage.getItem('accessToken'))
        // console.log("api", api.defaults.headers.common["authorization"])

        // get current user profile
        const userProfile = await api.get("/user/me");
        console.log('user profile', userProfile)
        dispatch({ type: types.POST_ADDTOCART_SUCCESS, payload: userProfile.data.data.user});
    } catch (error) {
        toast.error('Please log in to use this feature.');
        dispatch({type: types.POST_ADDTOCART_FAILURE, payload: error});
    }
}


const deleteCart = () => async (dispatch) => {
    dispatch({type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = "/user/cart"
        console.log(url);
        await api.delete(url);
        toast.success('Deleted successfully.');

        // get current user profile
        const userProfile = await api.get("/user/me");
        console.log('user profile', userProfile)
        dispatch({type: types.DELETE_CART_SUCCESS, payload: userProfile.data.data.user})
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.DELETE_CART_FAILURE, payload: error});
    }
}

const postOrder = () => async (dispatch) => {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = "/user/order";
        console.log(url);
        const res = await api.post(url);
        dispatch({ type: types.POST_ORDER_SUCCESS, payload: res.data.data.newOrder})
    } catch (error) {
        dispatch({type: types.POST_ORDER_FAILURE, payload: error});
    }
};

const deleteOrder = (id) => async (dispatch) => {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = `/user/order/${id}`;
        console.log(url);
        await api.delete(url);
        toast.success('Your order has been deleted.')

        // get current user profile
        const userProfile = await api.get("/user/me");
        console.log('user profile', userProfile)
        dispatch({ type: types.DELETE_ORDER_SUCCESS, payload: userProfile.data.data.user})
    } catch (error) {
        toast.error(error.message)
        dispatch({type: types.DELETE_ORDER_FAILURE, payload: error});
    }
};


const putPayment = ({id, address, phone})=> async (dispatch) => {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = `/user/order/${id}`;
        await api.put(url, {address,phone});
        toast.success('Paid successfully.')

         // get current user profile
        const userProfile = await api.get("/user/me");
        console.log('user profile', userProfile)
        dispatch({type: types.PUT_ORDER_SUCCESS, payload: userProfile.data.data.user})
    } catch (error) {
        // toast.error(error.message)
        dispatch({type: types.PUT_ORDER_FAILURE, payload: error});
    }
};

const getPaidOrders = ({page,limit}) => async (dispatch) => {
    dispatch({ type: types.POST_USER_REQUEST, payload: null});

    try {
        let url = `/user/orders?page=${page}&limit=${limit}`;
        const res = await api.get(url);
        dispatch({type: types.GET_PAIDORDERS_SUCCESS, payload: res.data.data})
    } catch (error) {
        dispatch({type: types.GET_USERPROFILE_FAILURE, payload: error})
    }
}

export const userActions = {
    postRegister, 
    postLogIn, 
    logOut, 
    addToCart, 
    getUserProfile, 
    deleteCart,
    postOrder,
    deleteOrder,
    putPayment,
    getPaidOrders
};
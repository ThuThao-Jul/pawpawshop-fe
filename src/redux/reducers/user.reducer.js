import * as types from "../constants/user.constants";
const recentData = JSON.parse(localStorage.getItem('loggedInData'))
const token = !!localStorage.getItem('accessToken')
const initialState = token ? recentData : {
    "loading": false,
    "login": token,
    "data": null,
    "cart": [],
    "orders": null,
    "paidOrders": [] //paid orders
};

const userReducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch (type) {
        case types.POST_USER_REQUEST:
            return {...state, "loading": true};
        case types.POST_USER_SUCCESS:
            return {...state,"loading": false, "data": payload };
        case types.POST_USERLOGIN_SUCCESS:
            state = {"loading": false, "login": true, "data": payload.user, "cart": payload.user.cart};
            localStorage.setItem('loggedInData', JSON.stringify(state))
            return state;
        case types.POST_LOGOUT_SUCCESS:
            localStorage.removeItem('loggedInData');
            localStorage.removeItem('accessToken');
            return {"loading": false, "login": false, "data": payload};
        case types.POST_ADDTOCART_SUCCESS:
            return {...state,"cart": payload.cart, "data": payload, "loading": false};
        case types.GET_USERPROFILE_SUCCESS:
            return {...state, "loading": false, "data": payload, "login": true, "cart": payload.cart}
        case types.DELETE_CART_SUCCESS:
            return {...state, "loading": false, "data": payload, "cart": payload.cart};
        case types.POST_ORDER_SUCCESS:
            return {...state, "loading": false, "orders": payload};
        case types.DELETE_ORDER_SUCCESS:
            return {...state, "loading": false, "data": payload, "orders": null};
        case types.PUT_ORDER_SUCCESS:
            return {...state, "loading": false, "data": payload, "orders": null, "cart": []};
        case types.GET_PAIDORDERS_SUCCESS:
            return {...state, "loading": false, "paidOrders": payload}
        case types.POST_USER_FAILURE:
            return state;
        default:
            return state;
    }
};

export default userReducer;
import * as types from "../constants/admin.constants";
const previousData = JSON.parse(localStorage.getItem('adminData'));
const tokenAdmin = !!localStorage.getItem('adminToken');
const initialState = tokenAdmin ? previousData : {
    "loading": false,
    "login": false,
    "data": null,
    "paidOrders": null,
    "totalPages": null,
    "totalRevenue": null,
};

const adminReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case types.POST_ADMINLOGIN_REQUEST:
            return {...state, "loading": true};
        case types.POST_ADMINLOGIN_SUCCESS:
            localStorage.setItem('adminData', JSON.stringify({...state, "loading": false, "login": true, "data": payload.user}))
            return {...state, "loading": false, "login": true, "data": payload.user};
        case types.GET_REVENUE_SUCCESS:
            return {...state, "loading": false, "totalRevenue": payload};
        case types.GET_ORDERS_SUCCESS:
            return {...state, "loading": false, "paidOrders": payload.orders, "totalPages": payload.totalPages};
        case types.PUT_ORDERS_SUCCESS:
            return {...state, "loading": false, "paidOders": payload.orders, "totalPages": payload.totalPages};
        case types.POST_ADMINLOGOUT_SUCCESS:
            localStorage.removeItem('adminData');
            return {"loading": false, "login": false, "data": payload}
        case types.POST_ADMINLOGIN_FAILURE:
            return {...state,"loading": false, "login": false, "data": payload}
        default:
            return state;
    }
};

export default adminReducer;
import * as types from "../constants/user.constants";

const initialState ={
    "loading": false,
    "login": false,
    "data": null,
    "cart": []
};

const userReducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch (type) {
        case types.POST_USER_REQUEST:
            return {...state, "loading": true};
        case types.POST_USER_SUCCESS:
            return {...state,"loading": false, "data": payload };
        case types.POST_USERLOGIN_SUCCESS:
            return {"loading": false, "login": true, "data": payload.user, "cart": payload.user.cart};
        case types.POST_LOGOUT_SUCCESS:
            return {"loading": false, "login": false, "data": payload};
        case types.POST_ADDTOCART_SUCCESS:
            return {...state,"cart": payload.cart, "data": payload, "loading": false};
        case types.GET_USERPROFILE_SUCCESS:
            return {...state, "loading": false, "data": payload, "login": true, "cart": payload.cart}
        case types.POST_USER_FAILURE:
            return state;
        default:
            return state;
    }
};

export default userReducer;
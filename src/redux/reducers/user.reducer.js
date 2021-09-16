import * as types from "../constants/user.constants";

const initialState ={
    "loading": false,
    "login": false,
    "data": null,
};

const userReducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch (type) {
        case types.POST_USER_REQUEST:
            return {...state, "loading": true};
        case types.POST_USER_SUCCESS:
            return {...state,"loading": false, "data": payload };
        case types.POST_USERLOGIN_SUCCESS:
            return {"loading": false, "login": true, "data": payload.user};
        case types.POST_LOGOUT_SUCCESS:
            return {"loading": false, "login": false, "data": payload};
        case types.POST_USER_FAILURE:
            return state;
        default:
            return state;
    }
};

export default userReducer;
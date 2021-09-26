import * as types from "../constants/pet.constants";
const initialState = {
    "loading": false,
    "data": null,
};

const petReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.POST_PET_REQUEST:
            return {...state, "loading": true};
        case types.POST_PET_SUCCESS:
            return {...state, "loading": false, "data": payload};
        case types.POST_PET_FAILURE:
            return state;
        default:
            return state;
    }
};

export default petReducer;
import { combineReducers } from "redux";
import productReducer from "./products.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
    userReducer: userReducer,
    productReducer: productReducer
})
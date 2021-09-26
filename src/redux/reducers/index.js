import { combineReducers } from "redux";
import adminReducer from "./admin.reducer";
import petReducer from "./pet.reducer";
import productReducer from "./products.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
    userReducer: userReducer,
    productReducer: productReducer,
    adminReducer: adminReducer,
    petReducer: petReducer,
})
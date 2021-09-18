import * as types from "../constants/product.constants";

const initialState ={
    "loading": false,
    "products": null,
    "totalPages": null,
    "categories": null,
    "bestSellers": null,
    "selectedProduct": null,
};

const productReducer = (state = initialState, action)=>{
    const {type,payload} = action;
    switch (type) {
        case types.GET_CATEGORIES_REQUEST:
            return {...state,"loading": true};
        case types.GET_CATEGORIES_SUCCESS:
            return {...state,"loading": false, "categories": payload};
        case types.GET_CATEGORIES_FAILURE:
            return state;
        case types.GET_PRODUCTS_SUCCESS:
            return {...state,"loading": false, "products": payload.products, "totalPages": payload.totalPages};
        case types.GET_BEST_SUCCESS:
            return {...state, "loading": false, "bestSellers": payload};
        case types.GET_ONEPRODUCT_SUCCESS:
            return {...state, "loading": false, "selectedProduct": payload}
        default:
            return state;
    }
};

export default productReducer;
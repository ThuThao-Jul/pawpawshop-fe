import api from "../../apiService";
import * as types from "../constants/product.constants";


const getAllCategories = ()=> async (dispatch)=>{
    dispatch({type: types.GET_CATEGORIES_REQUEST, payload: null});

    try {
        let url = "/products/categories";
        const res= await api.get(url);
        dispatch({type: types.GET_CATEGORIES_SUCCESS, payload: res.data.data.categories});
    } catch (error) {
        dispatch({type: types.GET_CATEGORIES_FAILURE, payload: error})
    }
};

const getAllProducts = ({page, limit, from, to, price, category, name})=> async (dispatch)=>{
    dispatch({type: types.GET_CATEGORIES_REQUEST, payload: null});

    try {
        let url = `/products?page=${page}&limit=${limit}`;
        if(from){
            url+=`&from=${from}`;
        };
        if(to){
            url+=`&to=${to}`;
        }
        if(price){
            url+=`&price=${price}`;
        };
        if(category){
            url+=`&category=${category}`;
        };
        if(name){
            url=`/products?page=${page}&limit=${limit}&name=${name}`;
        }
        console.log('url', url);
        const res= await api.get(url);
        dispatch({type: types.GET_PRODUCTS_SUCCESS, payload: res.data.data})
    } catch (error) {
        dispatch({type: types.GET_CATEGORIES_FAILURE, payload: error})
    }
};

const getBestSellers = () => async (dispatch) => {
    dispatch({type: types.GET_CATEGORIES_REQUEST, payload: null});

    try {
        let url = "/products?limit=4";
        const res= await api.get(url);
        dispatch({type: types.GET_BEST_SUCCESS, payload: res.data.data.products});
    } catch (error) {
        dispatch({type: types.GET_CATEGORIES_FAILURE, payload: error})
    }
}

const getSingleProduct = (id) => async (dispatch) => {
    dispatch({type: types.GET_CATEGORIES_REQUEST, payload: null});

    try {
        let url = `/products/${id}`;
        const res= await api.get(url);
        console.log(url)
        dispatch({type: types.GET_ONEPRODUCT_SUCCESS, payload: res.data.data.product});
    } catch (error) {
        dispatch({type: types.GET_CATEGORIES_FAILURE, payload: error})
    }
}

export const productActions = {getAllCategories, getAllProducts, getBestSellers, getSingleProduct}
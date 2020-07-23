import axios from "axios";
import store from "./store.js";
import { backURL } from "../../components/config/api.js";
import {
    GET_ALL_PRODUCTS,
    ADD_PRODUCT_TO_CART,
    GET_GLUTEN_FREE_PRODUCTS,
    GET_VEGETARIAN_PRODUCTS
} from "./types/products.js";

export const login = async(credentials) =>{
   
    const res = await axios.post( backURL + "users/login", credentials);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    });
    localStorage.setItem('authToken', res.data.token);
    return res;
}

export const allProducts = async() =>{
    const res = await axios.get(backURL + "products");
    store.dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data
    })
}

export const glutenFreeProducts = async() =>{
    const res = await axios.get(backURL + "products/glutenfree");
    store.dispatch({
        type: GET_GLUTEN_FREE_PRODUCTS,
        payload: res.data
    })
}

export const VeganProducts = async() =>{
    const res = await axios.get(backURL + "products/vegetarian");
    console.log(res)
    store.dispatch({
        type: GET_VEGETARIAN_PRODUCTS,
        payload: res.data
    })
}

export const addProductToCart = (product) =>{
    const cart = store.getState().products.cart;
    store.dispatch({
        type:ADD_PRODUCT_TO_CART,
        payload: [...cart,product]
    })
}
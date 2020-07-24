import { GET_ALL_PRODUCTS, ADD_PRODUCT_TO_CART, GET_GLUTEN_FREE_PRODUCTS, GET_VEGETARIAN_PRODUCTS } from "./types/products.js";

const initialState = {
    user: {},
    products: [],
    glutenFree: [],
    vegetarian: [],
    cart:[]
}

function reducer(state = initialState, action){
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            return{
                ...state,
                user :{}
            }
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case GET_GLUTEN_FREE_PRODUCTS:
            return{
                ...state,
                glutenFree: action.payload
            }
        case GET_VEGETARIAN_PRODUCTS:
            return{
                ...state,
                vegetarian: action.payload
            }
        case ADD_PRODUCT_TO_CART:
            return{
                ...state,
                cart:action.payload
            }
        default:
            return state
    }
}

export default reducer;

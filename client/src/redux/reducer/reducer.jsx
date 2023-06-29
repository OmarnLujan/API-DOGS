import { FILTER,
    FILTER_DOG_BY_DB,
    FILTER_TEMPERAMENT,
    GET_DOGS,
    GET_DOG_BY_ID,
    GET_DOG_BY_NAME,
    GET_TEMPERAMENTS,
    ORDER_DOG_BY_NAME,
    REMOVE_DOG,
    POST_DOG, } from "../actions/types.jsx";


    const initialState = {
        dogs: [],
        details: [],
        temperaments: [],
    };


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTER_DOG_BY_DB:
            return {
                ...state,
                prueba: payload,
            };
        
        case FILTER_TEMPERAMENT:
            return {
                ...state,
                prueba: payload,
            };
        
        case GET_DOGS:
            return {
                ...state,
                dogs: payload,
            };
        
        case GET_DOG_BY_ID:
            return {
                ...state,
                prueba: payload,
            };
        case GET_DOG_BY_NAME:
            return {
                ...state,
                prueba: payload,
            };
        case GET_TEMPERAMENTS:
            return {
                ...state,
                prueba: payload,
            };
        case ORDER_DOG_BY_NAME:
            return {
                ...state,
                prueba: payload,
            };
        case REMOVE_DOG:
            return {
                ...state,
                prueba: payload,
            };
        case POST_DOG:
            return {
                ...state,
                prueba: payload,
            };
        
        default:
            return { ...state }
    }
}
export default reducer;
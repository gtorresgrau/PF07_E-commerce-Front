import {
    GET_SNEACKERS,
} from '../Actions/ActionTypes.js';

export const initialState ={
    sneackers: [],
    allSneackers:[],
    detail: [],
}

export default function rootReducer(state = initialState, action ){
    switch(action.type) {
        case GET_SNEACKERS:
            return{
                ...state,
                sneackers: action.payload,
                allSneackers: action.payload
            }
        default :
            return{
                ...state
            }
}};
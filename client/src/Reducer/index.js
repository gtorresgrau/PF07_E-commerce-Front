import { GET_SNEACKERS, GET_ALL_SNEACKERS} from '../Actions/ActionTypes.js';

export const initialState ={
    sneackers: [],
    allSneackers:[],
    detail: [],
}

export default function rootReducer(state = initialState, action ){
    switch(action.type) {
        case GET_ALL_SNEACKERS:
            return{
                ...state,
                sneackers: action.payload,
                allSneackers: action.payload
            }
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
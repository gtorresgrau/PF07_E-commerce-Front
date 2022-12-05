import {
  GET_SNEAKERS,
  GET_ALL_SNEAKERS,
  GET_SNEAKER_DETAIL,
  LOADING,
  RESET_DETAIL,
} from '../Actions/ActionTypes.js';

export const initialState = {
  sneakers: [],
  allSneakers: [],
  detail: [],
  loading: false,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SNEAKERS:
      return {
        ...state,
        sneakers: action.payload,
        allSneakers: action.payload
      }
    case GET_SNEAKERS:
      return {
        ...state,
        sneakers: action.payload,
        allSneakers: action.payload
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_SNEAKER_DETAIL:
      return {
        ...state,
        loading: false,
        detail: action.payload
      }
    case RESET_DETAIL:
      return {
        ...state,
        detail: [],
      };
    default:
      return {
        ...state
      }
  }
};
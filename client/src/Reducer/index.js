import {
  GET_SNEACKERS,
  GET_SNEAKER_DETAIL,
  LOADING,
  RESET_DETAIL,
} from '../Actions/ActionTypes.js';

export const initialState = {
  sneackers: [],
  allSneackers: [],
  detail: [],
  loading: false
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SNEACKERS:
      return {
        ...state,
        sneackers: action.payload,
        allSneackers: action.payload
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
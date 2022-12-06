import {
  GET_SNEAKERS,
  GET_ALL_SNEAKERS,
  GET_SNEAKER_DETAIL,
  LOADING,
  RESET_DETAIL,
  GET_BRAND,
  GET_PRICE,
  GET_AZ,
  GET_COLOUR
} from '../Actions/ActionTypes.js';

export const initialState = {
  sneakers: [],
  allSneakers: [],
  detail: [],
  colours:[],
  loading: false,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SNEAKERS:
      return {
        ...state,
        sneakers: action.payload,
        allSneakers: action.payload,
      }
    case GET_SNEAKERS:
      return {
        ...state,
        sneakers: action.payload,
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
    case GET_AZ:
      let sort = action.payload === 'az'
        ? state.sneakers.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0
        })
        : state.sneakers.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        })
      return {
        ...state,
        sneakers: sort
      }
    case GET_PRICE:
      let sortPrice = action.payload === '+a-'
        ? state.sneakers.sort((a, b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          return 0
        })
        : state.sneakers.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0
        })
      return {
        ...state,
        sneakers: sortPrice
      }
    case GET_BRAND:
      return {
        ...state,
        sneakers: action.payload,
      }
    case GET_COLOUR:
        //console.log('reducer->payload: ',action.payload)
        return {
          ...state,
          sneakers: action.payload,
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
import {
  GET_SNEAKERS,
  GET_ALL_SNEAKERS,
  GET_ALL_ORDERS,
  GET_SNEAKER_DETAIL,
  LOADING,
  RESET_DETAIL,
  GET_BRAND,
  GET_PRICE,
  GET_AZ,
  GET_COLOUR,
  GET_TYPE,
  GET_GENRE,
  ADD_SNEAKER,
  IMG_URL,
  GET_ALL_REVIEWS,
  GET_USERS,
  DELETE_SNEAKER
} from '../Actions/ActionTypes.js';

export const initialState = {
  sneakers: [],
  allSneakers: [],
  detail: [],
  colours: [],
  loading: false,
  cart: [],
  image:'',
  reviews:[],
  users: [],
  orders: [],
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
      case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
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
      console.log('reducerB->payload: ', action.payload)
      return {
        ...state,
        sneakers: action.payload,
      }
    case GET_GENRE:
      console.log('reducerG->payload: ', action.payload)
      return {
        ...state,
        sneakers: action.payload,
      }
    case GET_TYPE:
      console.log('reducerT->payload: ', action.payload)
      return {
        ...state,
        sneakers: action.payload,
      }
    case GET_COLOUR:
      console.log('reducerC->payload: ', action.payload)
      return {
        ...state,
        sneakers: action.payload,
      }
    case RESET_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case ADD_SNEAKER:
      return {
        ...state,
      };
    case IMG_URL:
      console.log('reducerimg:', action.payload)
      return{
        image: action.payload,
      };
    case GET_ALL_REVIEWS:
      console.log('reducerREV:',action.payload)
      return{
        reviews:typeof action.payload === 'string'?[action.payload]:action.payload
      };
    case GET_USERS:
    return{
      ...state,
      users: action.payload
    };
    case DELETE_SNEAKER:
      return {
        ...state,
        loading: false,
        delete: action.payload
      }
    default:
      return {
        ...state
      }
  }
};
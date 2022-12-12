import {
  GET_SNEAKERS,
  GET_ALL_SNEAKERS,
  GET_SNEAKER_DETAIL,
  LOADING,
  RESET_DETAIL,
  GET_BRAND,
  GET_PRICE,
  GET_AZ,
  GET_COLOUR,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  CLEAR_CART,
  REMOVE_ONE_CART,
} from '../Actions/ActionTypes.js';

export const initialState = {
  sneakers: [],
  allSneakers: [],
  detail: [],
  colours: [],
  loading: false,
  cart: [],
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
    case ADD_TO_CART:
      let newItem = action.payload
      let itemInCart = state.cart.find(item => item.id === newItem.id)
      return itemInCart ? {
        ...state,
        cart: state.cart.map(e => e.id === newItem.id ? { ...e, quantify: e.quantify + 1 } : e)
      } : {
        ...state,
        cart: [...state.cart, { ...newItem, quantify: 1 }]
      }
    case REMOVE_ONE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(e => e.id !== action.payload)
      }
    case REMOVE_ONE_CART:
      let removeItem = action.payload
      let itemInCartRemove = state.cart.find(item => item.id === removeItem.id)
      return itemInCartRemove ? {
        ...state,
        cart: state.cart.map(e => e.id === removeItem.id ? { ...e, quantify: e.quantify - 1 } : e)
      } : {
        ...state,
        cart: [...state.cart, { ...removeItem, quantify: 1 }]
      }
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      }
    default:
      return {
        ...state
      }
  }
};
import axios from 'axios';
import { 
  GET_SNEAKERS,
  GET_ALL_SNEAKERS,
  LOADING, RESET_DETAIL,
  GET_SNEAKER_DETAIL,
  GET_BRAND,
  GET_STOCK,
  GET_AZ
} from '../Actions/ActionTypes.js';

export const loading = () => {
  return {
    type: LOADING
  }
};

export function getAllSneackers() {
  return async function (dispatch) {
    let sneakers = await axios.get("http://localhost:3001/sneakers");
    dispatch({
      type: GET_ALL_SNEAKERS,
      payload: sneakers.data
    })
  }
}

export function getSneakerByName(title) {
  console.log('action--> name:',title)
  return async function (dispatch) {
    try {
      const URL = `http://localhost:3001/sneakers?title=`
      let getSneaker = await axios(`${URL}${title}`);
      console.log('action:', getSneaker.data)
      return dispatch({
        type: GET_SNEAKERS,
        payload: getSneaker.data
      })
    }
    catch (e) {
      window.location.href = "http://localhost:3001/sneakers";
      console.log(`There are no Sneackers with the combination of Characters entered: ${title}`)
      alert(`There are no Sneackers with the combination of Characters entered: ${title}`)
    }
  }
};

export function getSneakerDetail(id) {
  return async function (dispatch) {
    try {
      dispatch(loading())
      const info = await axios(`http://localhost:3001/sneaker/${id}`);
      return dispatch({
        type: GET_SNEAKER_DETAIL,
        payload: info.data
      })
    }
    catch (e) {
      window.location.href = "http://localhost:3000/sneaker/";
      console.log(`Something happened when filtering by id: ${id}`)
      alert(`Something happened when filtering by id: ${id}`)
    }
  }
}

export function resetDetail() {
  return {
    type: RESET_DETAIL,
  };
};

//-------------------------------------------------------

export function filterByBrand(payload){
  return async function(dispatch){
      if(payload === 'Brands') { var urlBack = `http://localhost:3001/brand`}
      else{ urlBack = `http://localhost:3001/sneakers/brand/${payload}`}
      try{                
          let getBrand = await axios(urlBack);
              return dispatch({
                  type: GET_BRAND,
                  payload: getBrand.data
              })
          
          }
          catch(e){
              window.location.href = "http://localhost:3000/sneakers/";
              console.log(`Something happened when filtering by brand: ${payload}`)
              alert(`Something happened when filtering by brand: ${payload}`)
          }
  }
};

//-----------------------------------------------------------------------------------------------

export function sortAz(payload){
  return{
      type: GET_AZ,
      payload
  }
};

export function sortStock(payload){
  return{
      type: GET_STOCK,
      payload
  }
};
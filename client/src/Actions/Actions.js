import axios from 'axios';
import {
  GET_SNEACKERS,
  GET_SNEAKER_DETAIL,
  LOADING,
  RESET_DETAIL,
} from '../Actions/ActionTypes.js';


export function loading() {
  return {
    type: LOADING
  }
}

export function getSneakerByName(name) {
  return async function (dispatch) {
    try {
      const URL = 'http://localhost:3001/sneakers'
      let getSneacker = await axios(`${URL}${name}`);
      console.log('action:', getSneacker)
      return dispatch({
        type: GET_SNEACKERS,
        payload: getSneacker.data
      })
    }
    catch (e) {
      window.location.href = "http://localhost:3001/sneakers";
      console.log(`There are no Sneackers with the combination of Characters entered: ${name}`)
      alert(`There are no Sneackers with the combination of Characters entered: ${name}`)
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
      window.location.href = "http://localhost:3000/home/";
      console.log(`Something went wrong filtering by id: ${id}`)
      alert(`Something went wrong filtering by id: ${id}`)
    }
  }
}
export function resetDetail() {
  return {
    type: RESET_DETAIL,
  };
};
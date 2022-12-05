import axios from 'axios';
import { GET_SNEACKERS, GET_ALL_SNEACKERS, LOADING, RESET_DETAIL, GET_SNEAKER_DETAIL } from '../Actions/ActionTypes.js';

export const loading = () => {
  return {
    type: LOADING
  }
};

export function getAllSneackers() {
  return async function (dispatch) {
    let sneackers = await axios.get("http://localhost:3001/sneakers");
    dispatch({
      type: GET_ALL_SNEACKERS,
      payload: sneackers.data
    })
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
      window.location.href = "http://localhost:3000/countries/";
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
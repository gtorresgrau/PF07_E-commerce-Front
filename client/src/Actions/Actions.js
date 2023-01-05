import axios from 'axios';

import {
  GET_SNEAKERS,
  GET_ALL_SNEAKERS,
  LOADING, 
  RESET_DETAIL,
  GET_SNEAKER_DETAIL,
  GET_BRAND,
  GET_PRICE,
  GET_AZ,
  GET_COLOUR,
  GET_TYPE,
  GET_GENRE,
  GET_ALL_REVIEWS,
} from '../Actions/ActionTypes.js';

export const loading = () => {
  return {
    type: LOADING
  }
};

export function getAllSneackers() {
  return async function (dispatch) {
    let sneakers = await axios.get("/sneakers");
    dispatch({
      type: GET_ALL_SNEAKERS,
      payload: sneakers.data
    })
  }
}

export function getSneakerByName(title) {
  console.log('action--> name:', title)
  return async function (dispatch) {
    try {
      const URL = `/sneakerName?title=`
      let getSneaker = await axios(`${URL}${title}`);
      console.log('action:', getSneaker.data)
      return dispatch({
        type: GET_SNEAKERS,
        payload: getSneaker.data
      })
    }
    catch (e) {
      window.location.href = "/sneakers";
      console.log(`There are no Sneackers with the combination of Characters entered: ${title}`)
      alert(`There are no Sneackers with the combination of Characters entered: ${title}`)
    }
  }
};

export function getSneakerDetail(id) {
  return async function (dispatch) {
    try {
      dispatch(loading())
      const info = await axios(`/sneaker/${id}`);
      return dispatch({
        type: GET_SNEAKER_DETAIL,
        payload: info.data
      })
    }
    catch (e) {
      window.location.href = "/sneaker/";
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

export function filterByBrand(payload) {
  return async function (dispatch) {
    console.log('actionBR->payload:', payload)
    if (payload === 'Brands') { var urlBack = `/sneakers` }
    else { urlBack = `/filter?${payload}` }
    try {
      let getBrand = await axios(urlBack);
      return dispatch({
        type: GET_BRAND,
        payload: getBrand.data
      })

    }
    catch (e) {
      window.location.href = "/sneakers/";
      console.log(`Something happened when filtering by brand: ${payload}`)
      alert(`Something happened when filtering by brand: ${payload}`)
    }
  }
};

export function filterByColour(payload) {
  return async function (dispatch) {
    console.log('actionCO->payload:', payload)
    if (payload === 'All') { var urlBack = `/sneakers` }
    else { urlBack = `/filter?${payload}` }
    console.log('act->urlBack: ', urlBack)
    try {
      let getColour = await axios(urlBack);
      console.log('colour:', getColour)
      return dispatch({
        type: GET_COLOUR,
        payload: getColour.data
      })

    }
    catch (e) {
      window.location.href = "/sneakers/";
      console.log(`Something happened when filtering by brand: ${payload}`)
      alert(`Something happened when filtering by brand: ${payload}`)
    }
  }
};

export function filterByGenre(payload) {
  return async function (dispatch) {
    console.log('action->payload:', payload)
    if (payload === 'All') { var urlBack = `/sneakers` }
    else { urlBack = `/filter?${payload}` }
    console.log('actGE->urlBack: ', urlBack)
    try {
      let getGenre = await axios(urlBack);
      return dispatch({
        type: GET_GENRE,
        payload: getGenre.data
      })
    }
    catch (e) {
      window.location.href = "/sneakers/";
      console.log(`Something happened when filtering by Genre: ${payload}`)
      alert(`Something happened when filtering by Genre: ${payload}`)
    }
  }
};

export function filterByType(payload) {
  return async function (dispatch) {
    console.log('actionTY->payload:', payload)
    if (payload === 'All') { var urlBack = `/sneakers` }
    else { urlBack = `/filter?${payload}` }
    console.log('act->urlBack: ', urlBack)
    try {
      let getType = await axios(urlBack);
      return dispatch({
        type: GET_TYPE,
        payload: getType.data
      })

    }
    catch (e) {
      window.location.href = "/sneakers/";
      console.log(`Something happened when filtering by Type: ${payload}`)
      alert(`Something happened when filtering by Type: ${payload}`)
    }
  }
};

//-----------------------------------------------------------------------------------------------

export function sortAz(payload) {
  return {
    type: GET_AZ,
    payload
  }
};

export function sortPrice(payload) {
  return {
    type: GET_PRICE,
    payload
  }
};

//--------------------------------------------------------------------------------------------------
export function addSneaker(payload) {
  return async function () {
    const add = await axios.post(`/sneakers`, payload)
    return add;
  }
};

export const uploadImage = async(image) => {
  try {
      console.log('actionsIma:',image) 
      const img = await axios.post('/upload',{
        image:image
      })
       const uploadedResponse = img.data.secure_url;
       return uploadedResponse
      } catch (error) {
        console.error('actionE:',error)
    }
  
}


//--------------------------------------------------------------------------------
export function postReview(payload) {
  return async function () {
      try {
        console.log('actPayload:',payload);
        const rev = await axios.post('http://localhost:3001/reviews', payload);
        return rev.data;
      } catch (error) {
        console.error('Act_Rev_Err:',error);
      }
    }
};

//   const rev = fetch('http://localhost:3001/reviews', { 
//   method: "POST",
//   body: payload 
// })

//----------------------------------------------------------------------------------------------

export function getAllReviews(id) {
  return async function (dispatch) {
  console.log('actionRevID:',id)
      try {
        dispatch(loading())
        const reviews = await axios(`/reviews/${id}`);
        return dispatch({
          type: GET_ALL_REVIEWS,
          payload: reviews.data
        })
      } catch (e) {
        window.location.href = "/sneaker/";
        console.log(`Something happened when filtering Reviews by id: ${id}`)
        alert(`Something happened when filtering Reviews by id: ${id}`)
      };
}};


///----------------------------------------------------------------------------------------------

// export async function guardarInfo(prefer){
//   console.log('ActionInfo:',prefer)
//   try{
//       let algo = await axios.get(`https://api.mercadopago.com/merchant_orders/search?preference_id=${prefer}`,{
//         headers:{
//           Authorization : `Bearer Acces-token`
//       }
//         })    
//           console.log('algo:', algo.data)
//   }catch(e){
//       console.error(e)
//   }
// };
import axios from 'axios';
import {
    GET_SNEACKERS,
} from '../Actions/ActionTypes.js';


export function getSneakerByName(name){
    return async function(dispatch){
        try{
            const URL = 'http://localhost:3001/sneakers'
            let getSneacker = await axios(`${URL}${name}`);
            console.log('action:',getSneacker)
                return dispatch({
                    type: GET_SNEACKERS,
                    payload: getSneacker.data
                })
        }
        catch(e){
            window.location.href = "http://localhost:3001/sneakers";
            console.log(`There are no Sneackers with the combination of Characters entered: ${name}`)
            alert(`There are no Sneackers with the combination of Characters entered: ${name}`)
        }
    }
};
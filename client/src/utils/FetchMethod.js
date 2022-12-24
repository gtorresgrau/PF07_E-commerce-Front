import React, {useEffect, useCallback} from 'react';
import axios from 'axios';


export const fetchCToken = async (endpoint, data, method = 'GET', limit=10)=>{
    const url = `${sitioUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if(method === 'GET'){
        const resp = await axios(url,{
            headers:{
                'x-token':token,
                'limit': limit
            }
        });
        console.log('response:', resp);
        
        return await resp.json();
    }else{
        const resp = await axios(url,{
            method,
            headers:{
                'Content-type': 'application/json',
                'x-token':token,
                'limit': limit
            },
            body: json.stringify(data)
        })
        return await resp.json();
    }


}
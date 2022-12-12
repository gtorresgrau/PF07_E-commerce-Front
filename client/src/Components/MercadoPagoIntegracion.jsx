import React, {useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import {fetchCToken} from '../utils/FetchMethod.js';

const FORM_ID = 'payment-form';

export default function Product ({items}){
    const {id} = useParams();

    obtenerpreference = useCallback(
        async() => {
            const res = await fetchCToken(`compra/${id}`, {items}, 'POST' );
            console.log('res:',res);
            if(res.global){
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
                script.setAttribute('data-preference-id',res.global);
                const form =document.getElementById(FORM_ID);
                form.appendChild(script);
            }
        },[id, items],
    )
    useEffect(()=>{
        obtenerpreference()
    },[obtenerpreference])
    return(
        <form id={FORM_ID} method='GET'/>
    );
}
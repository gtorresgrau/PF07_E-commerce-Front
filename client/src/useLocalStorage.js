import { useState } from "react";



export function useLocalStorage(key, initialValue){
    const [localCart, setLocalCart] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            return initialValue
        }
    });

    const setCart = value => {
        try{
            setLocalCart(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        }catch (error){
            console.log(error)
        }
    }

    return [localCart, setCart]
}
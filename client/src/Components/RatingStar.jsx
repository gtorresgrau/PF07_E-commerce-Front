import React, {useState} from "react";
import {FaStar} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';
import { postReview } from "../Actions/Actions";
import S from './Styles/RatingStar.module.css'

const RatingStar = ({sneaker}) =>{
    
    const { user } = useAuth0();
    const dispatch = useDispatch();
    const [stars, setStars]=useState(0);
    const [text, setText]=useState('');
    const [hover, setHover]=useState(null);
    const [usuario, setUsuario] = useState("user");
    

    const input = {
        stars:stars,
        text:text,
        sneakerId: sneaker.id,
        userId: usuario,
    };

    console.log('startReview:',input)

   const handlerSubmit=(e)=>{
        e.preventDefault();
        setUsuario(user.nickname);
        dispatch(postReview(input))
        alert(`Submiting Review succesfully`)
    };

    return (
        <div>
        <form onSubmit={(e)=>handlerSubmit(e)} id='newReview'>
            <div className={S.ratingValue} >
                {[...Array(5)].map((star, i)=>{
                    const ratingValue= i + 1;
                    console.log('stars:',stars);
                    return (
                        <label key={i} >
                            <input 
                                className={S.input}
                                type="radio" 
                                name="stars" 
                                value={stars} 
                                onClick={()=>setStars(ratingValue)} 
                            />
                            <FaStar 
                                className={S.star}
                                color={ratingValue <= (hover || stars) ? '#ffff00' : '#808080' }
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
            <div>
                <textarea className={S.textArea} name='text' placeholder="Enter a review..." onChange={(e)=>setText(e.target.value)} value={text}/>
            </div>
            <div>
                <input type="submit" value='SUBMIT RATING' className={S.btn} id='btn' disabled={!stars} />
            </div>
        </form>
            
        </div>
    )
};

export default RatingStar;
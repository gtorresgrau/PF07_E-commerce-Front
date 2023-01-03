import React, {useState} from "react";
import {FaStar} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';
import { postReview } from "../Actions/Actions";
import S from './Styles/RatingStar.module.css'

const RatingStar = ({sneaker}) =>{
    
    const { user } = useAuth0();
    const dispatch = useDispatch();
    const [rating, setRating]=useState(0);
    const [text, setText]=useState('');
    const [hover, setHover]=useState(null);

   // const form = document.getElementById('newReview');
   // const btn = document.getElementById('btn');

    const startReview = {
        stars:rating,
        text:text,
        sneakerId: sneaker.id,
        userId: 'user.nickname',
    };

    console.log('startReview:',startReview)

    const [input, setInput]=useState(startReview);

    const handlerSubmit =(e)=>{
        e.preventDefault();
        setInput({
            stars:rating, 
            text:text, 
            sneakerId: sneaker.id,
            userId: 'user.nickname',
        })
        console.log('input:',input)
        dispatch(postReview(input))
    };

    return (
        <div>
        <form onSubmit={(e)=>handlerSubmit(e)} id='newReview'>
            <div className={S.ratingValue} >
                {[...Array(5)].map((star, i)=>{
                    const ratingValue= i + 1;
                    console.log('rating:',rating);
                    return (
                        <label key={i} >
                            <input 
                                className={S.input}
                                type="checkbox" 
                                name="rating" 
                                value={rating} 
                                onClick={()=>setRating(ratingValue)} 
                            />
                            <FaStar 
                                className={S.star}
                                color={ratingValue <= (hover || rating) ? '#ffff00' : '#808080' }
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
            <div>
                <textarea className={S.textArea} placeholder="Enter a review..." onChange={(e)=>setText(e.target.value)} value={text}/>
            </div>
            <input type="submit" value='SUBMIT RATING' className={S.btn} id='btn' disabled={!rating} />
        </form>
        </div>
    )
};

export default RatingStar;
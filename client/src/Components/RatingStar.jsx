import React, {useState} from "react";
import {FaStar} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { postReview } from "../Actions/Actions";
import S from './Styles/RatingStar.module.css'

const RatingStar = () =>{

    const dispatch = useDispatch();
    const [rating, setRating]=useState(null);
    const [text, setText]=useState(null);
    const [hover, setHover]=useState(null);

    const form = document.getElementById('newReview');
    const btn = document.getElementById('btn');

    const rev={
        rating:'',
        text:'',
        sneakerId: '1',
        userId: '1'
    }

    const [input, setInput]=useState(rev);

    function handlerSubmit(e){
        e.preventDefault();
        setInput({
            rating, 
            text, 
            sneakerId:"1", 
            userId:"1"
        })
    };

    return (
        <div>
        <form onSubmit={handlerSubmit()} id='newReview'>
            <div className={S.ratingValue} >
                {[...Array(5)].map((star, i)=>{
                    const ratingValue= i + 1;

                    return (
                        <label key={i} >
                            <input 
                                className={S.input}
                                type="radio" 
                                name="rating" 
                                value={ratingValue} 
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
                <textarea className={S.textArea} placeholder="Enter a review..." onChange={setText(input.value)}/>
            </div>
            <input type="submit" value='SUBMIT RATING' className={S.btn} id='btn' disabled={!rating || !text } />
        </form>
        </div>
    )
};

export default RatingStar;
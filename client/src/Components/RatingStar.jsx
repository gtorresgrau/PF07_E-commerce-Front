import React, {useState} from "react";
import {FaStar} from 'react-icons/fa';
import S from './Styles/RatingStar.module.css'

const RatingStar = () =>{
    const [rating, setRating]=useState(null);
    const [hover, setHover]=useState(null);

    return (
        <div>
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
        </div>
    )
};

export default RatingStar;
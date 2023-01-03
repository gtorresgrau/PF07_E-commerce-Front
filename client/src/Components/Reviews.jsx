import React, { useState } from "react";
import S from './Styles/RatingStar.module.css'

const Reviews = () =>{
    
    const [text, setText]=useState(null);

    return (
            <div>
                <textarea className={S.textArea} placeholder="Enter a review..." />
            </div>

    )
};

export default Reviews;
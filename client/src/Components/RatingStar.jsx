import React, {useState} from "react";
import {FaStar} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';
import { postReview } from "../Actions/Actions";
import S from './Styles/RatingStar.module.css'
import Swal from "sweetalert2";

const RatingStar = ({sneaker, banned}) =>{
    const { user } = useAuth0();
    const dispatch = useDispatch();
    const [stars, setStars]=useState(0);
    const [text, setText]=useState('');
    const [hover, setHover]=useState(null);
    const [usuario, setUsuario] = useState("user");
    
    

    const alertRating = () => {
        Swal.fire({
          title: `Submiting Review succesfully`,
          text: "Thank you for your time.",
          icon: "success",
          confirmButtonText: "Ok",
        })
    };

    const alertBanned = () => {
        Swal.fire({
          title: `You are banned`,
          text: "You are not allowed to submit a review until further notice.",
          icon: "error",
          confirmButtonText: "Ok",
        })
    };
        
    const input = {
        stars:stars,
        text:text,
        sneakerId: sneaker.id,
        userId: usuario,
    };

   const handlerSubmit=(e)=>{
        e.preventDefault();
        if(!banned){
            dispatch(postReview(input))
            alertRating(); 
            setStars(0);
            setText('')
        }else{
            alertBanned(); 
            setStars(0);
            setText('')
        }
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
                                color={ratingValue <= (hover || stars) ? '#ffff00' : '#b7b7b7' }
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                            />
                        </label>
                    )
                })}
            </div>
            <div>
                <textarea className={S.textArea} name='text' placeholder="Enter a review..." onChange={(e)=>setText(e.target.value)} value={text} maxLength='1000' />
            </div>
            <div>
                <input type="submit" value='SUBMIT RATING' className={S.btn} id='btn' disabled={!stars} onClick={()=>
        setUsuario(user.nickname)} />
            </div>
        </form>
            
        </div>
    )
};

export default RatingStar;
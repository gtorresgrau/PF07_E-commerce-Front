import React from "react";
import S from './Styles/CardOffer.module.css';
import { FaRegHeart } from 'react-icons/fa';

export default function Card({image, title, price, type }) {
  
  return (
    <div>
        <div className={S.container}>
            <div className={S.icon}><FaRegHeart /></div>
            <img src={image} alt="imagen no encontrada" className={S.img}/>
            <div className={S.off}>-50%</div>
            <div className={S.price}>${price}</div>
            <div className={S.priceOffer}>${price * 0.5}</div>
            <p className={S.title}>{title}</p> 
            <p className={S.type}>{type}</p> 
        </div>
    </div>
  )
};
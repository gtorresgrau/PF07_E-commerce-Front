import React from "react";
import S from './Styles/Card.module.css';
import { FaRegHeart } from 'react-icons/fa';

export default function Card({image, title, price, type }) {
  
  return (
    <div>
        <div className={S.container}>
            <span className={S.icon}><FaRegHeart /></span>
            <img src={image} alt="imagen no encontrada" className={S.img}/>
            <div className={S.price}>${price}</div>
            <p className={S.title}>{title}</p> 
            <p className={S.type}>{type}</p> 
        </div>
    </div>
  )
};
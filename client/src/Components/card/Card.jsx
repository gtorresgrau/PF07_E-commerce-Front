import React from "react";
import styles from './Card.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Card({image, title, price, type}) {
  
  return (
    <div>
      
        <div className={styles.container}>
            <span className={styles.icon}><FaRegHeart /></span>
            <img src={image} alt="imagen no encontrada" className={styles.img}/>
            <div className={styles.price}>${price}</div>
            <p className={styles.title}>{title}</p> 
            <p className={styles.type}>{type}</p> 
        </div>
     
    </div>
  );
}
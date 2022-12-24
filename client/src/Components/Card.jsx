import React, { useContext } from "react";
import S from './Styles/Card.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { CartContex } from "./CardContex";
import { FavContainer} from "./FavContainer";



export default function Card(props) {

  const { addItemToCart } = useContext(CartContex);
  
  
  return (
    <div>
      <div className={S.container}>
        
        <div className={S.icon} onClick={ FavContainer(props)}><FaRegHeart /></div>
        <Link to={'/sneakers/' + props.id}>
          <img src={props.image} alt="imagen no encontrada" className={S.img} />
          <div className={S.price}>${props.price}</div>
          <p className={S.title}>{props.title}</p>
          <p className={S.type}>{props.type}</p>
        </Link >
        <button className={S.addToCart} onClick={() => addItemToCart(props)}>Add To Cart</button>
      </div>
    </div>
  )
};
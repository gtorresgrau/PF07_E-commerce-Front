import React, { useContext , useState} from "react";
import S from './Styles/Card.module.css';
import { FaRegHeart , FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContex } from "./CardContex";

import { FavContainerContext } from './FavContainerContext';


export default function Card(props) {
  const { addItemToCart } = useContext(CartContex);
  
  const { addItemToFav } = useContext(FavContainerContext);
  const [isInFav, setIsInFav] = useState(false);
  
  const handleAddToFav = () => {
    addItemToFav(props);
    setIsInFav(true);
  };


  return (
    <div>
      <div className={S.container}>
        
      <div className={S.icon} onClick={handleAddToFav}>
    {isInFav ? <FaHeart /> : <FaRegHeart />}
  </div>
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
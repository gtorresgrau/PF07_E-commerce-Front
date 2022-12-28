import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContainerContext } from "./FavContainerContext";
import s from './Styles/ProductItem.module.css';
import { CartContex } from "./CardContex";



function FavItem({ item }) {
  const { addItemToCart} = useContext(CartContex);
  const { deleteAll,setIsInFav } = useContext(FavContainerContext );
  
  
  
  return (
    <div className={s.cartItem}>
      <img className={s.image} src={item.image} alt={item.title} />
      <div className={s.dataContainer}>
        <div className={s.left}>
          <Link className={s.link} to={`/sneakers/${item.id}`}><p >{item.title}</p></Link>
          <div className={s.buttons}>
            
            <button className={s.addToCart1} onClick={() => deleteAll(item)}>X</button>
            <button className={s.addToCart} onClick={() =>{   
              addItemToCart(item)
              deleteAll(item)
              setIsInFav(false)
            } }>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavItem;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContainerContext } from "./FavContainerContext";
import s from './Styles/ProductItem.module.css';


function FavItem({ item }) {

  const { deleteAll } = useContext(FavContainerContext );

  
  return (
    <div className={s.cartItem}>
      <img className={s.image} src={item.image} alt={item.title} />
      <div className={s.dataContainer}>
        <div className={s.left}>
          <Link className={s.link} to={`/sneakers/${item.id}`}><p >{item.title}</p></Link>
          <div className={s.buttons}>
            
            <button className={s.btn} onClick={() => deleteAll(item)}>X</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavItem;
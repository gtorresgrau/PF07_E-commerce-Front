import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContex } from './CardContex';
import s from './Styles/ProductItem.module.css';
import { FavContainerContext } from './FavContainerContext';

function ProductItemPurchase({ item }) {

  const { addItemToFav } = useContext(FavContainerContext);
  const { addItemToCart, deleteItemToCart, deleteAll} = useContext(CartContex);

  let subTotal = item.price * item.quantity;
  return (
    <div className={s.cartItem}>
      <img className={s.image} src={item.image} alt={item.title} />
      <div className={s.dataContainer}>
        <div className={s.left}>
          <Link className={s.link} to={`/sneakers/${item.id}`}><p >{item.title}</p></Link>
          
            <p className={s.amount}>Quantity: {item.quantity}</p>
            <p className={s.amount}>Price: ${item.price},00 x {item.quantity} = ${subTotal},00</p>
          </div>
        </div>
      
    </div>
  )
}

export default ProductItemPurchase;
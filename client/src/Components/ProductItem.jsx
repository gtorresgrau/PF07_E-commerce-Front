import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContex } from './CardContex';
import s from './Styles/ProductItem.module.css';


function ProductItem({ item }) {

  const { addItemToCart, deleteItemToCart } = useContext(CartContex);

  let subTotal = item.price * item.amount;
  return (
    <div className={s.cartItem}>
      <img className={s.image} src={item.image} alt={item.title} />
      <div className={s.dataContainer}>
        <div className={s.left}>
          <Link className={s.link} to={`/sneakers/${item.id}`}><p >{item.title}</p></Link>
          <div className={s.buttons}>
            <button className={s.btn} onClick={() => addItemToCart(item)}>+</button>
            <button className={s.btn} onClick={() => deleteItemToCart(item)}>-</button>
            <p className={s.amount}>Amount: {item.amount}</p>
            <p className={s.amount}>Price: ${item.price},00 x {item.amount} = ${subTotal},00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
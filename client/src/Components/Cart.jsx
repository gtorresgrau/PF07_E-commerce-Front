import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { CartContex } from './CardContex';
import ProductItem from './ProductItem';
//import { useDispatch } from 'react-redux';
import s from './Styles/Cart.module.css'
import { useAuth0 } from '@auth0/auth0-react';
//import { guardarInfo } from '../Actions/Actions';

function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems } = useContext(CartContex);
  
  const { user } = useAuth0();

  //const dispatch = useDispatch()

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    )
  }, [cartItems])

  /*  const mercadoPago = (e) => {
     dispatch(payment(e))
   } */
  //var prefer='';
  function handlePayment(){
    console.log('cart: estoy aca')
    axios.post('http://localhost:3001/payment', cartItems,user)
          .then((res)=> 
          { window.location.href = res.data.response.body.init_point;
            localStorage.removeItem('cardProducts');
            //guardarInfo(prefer);
          })
          .catch((error)=>console.log('errorC',error))}
  

  const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0)

  return (
    <div /* className={s.cartContainer} */>
      <div onClick={() => { setCartOpen(!cartOpen) }} className={s.buttonCartContainer}>
        <div className={s.buttonCart}>
          {!cartOpen ? (
            <svg
              className={s.open}
              width={"30px"}
              viewBox="0 0 30 27"
              fill="none"
            >
              <path
                d="M29.733 6.64651C29.595 6.44711 29.4108 6.28414 29.196 6.17154C28.9813 6.05895 28.7425 6.00009 28.5 6.00001H7.9995L6.2685 1.84501C6.04153 1.29784 5.6572 0.830389 5.16424 0.501923C4.67127 0.173457 4.09187 -0.00123156 3.4995 6.53586e-06H0V3.00001H3.4995L10.6155 20.0775C10.7295 20.3507 10.9218 20.5841 11.1681 20.7483C11.4145 20.9125 11.7039 21 12 21H24C24.6255 21 25.185 20.6115 25.4055 20.028L29.9055 8.02801C29.9905 7.80094 30.0193 7.55664 29.9892 7.31603C29.9592 7.07543 29.8713 6.84569 29.733 6.64651V6.64651Z"
                fill="#F0F0F0"
              />
              <path
                d="M12.75 27C13.9926 27 15 25.9926 15 24.75C15 23.5074 13.9926 22.5 12.75 22.5C11.5074 22.5 10.5 23.5074 10.5 24.75C10.5 25.9926 11.5074 27 12.75 27Z"
                fill="#F0F0F0"
              />
              <path
                d="M23.25 27C24.4926 27 25.5 25.9926 25.5 24.75C25.5 23.5074 24.4926 22.5 23.25 22.5C22.0074 22.5 21 23.5074 21 24.75C21 25.9926 22.0074 27 23.25 27Z"
                fill="#F0F0F0"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M0.559099 0.559099C0.917199 0.201108 1.40282 0 1.90917 0C2.41553 0 2.90115 0.201108 3.25925 0.559099L10.0115 7.31138L16.7638 0.559099C17.124 0.211254 17.6063 0.0187787 18.107 0.0231296C18.6077 0.0274804 19.0866 0.228309 19.4407 0.582361C19.7947 0.936413 19.9956 1.41536 19.9999 1.91605C20.0043 2.41673 19.8118 2.8991 19.464 3.25925L12.7117 10.0115L19.464 16.7638C19.8118 17.124 20.0043 17.6063 19.9999 18.107C19.9956 18.6077 19.7947 19.0866 19.4407 19.4407C19.0866 19.7947 18.6077 19.9956 18.107 19.9999C17.6063 20.0043 17.124 19.8118 16.7638 19.464L10.0115 12.7117L3.25925 19.464C2.8991 19.8118 2.41673 20.0043 1.91605 19.9999C1.41536 19.9956 0.936413 19.7947 0.582361 19.4407C0.228309 19.0866 0.0274804 18.6077 0.0231296 18.107C0.0187787 17.6063 0.211254 17.124 0.559099 16.7638L7.31138 10.0115L0.559099 3.25925C0.201108 2.90115 0 2.41553 0 1.90917C0 1.40282 0.201108 0.917199 0.559099 0.559099Z"
                fill="#F0F0F0"
              />
            </svg>
          )}
        </div>
        {!cartOpen && (
          <div className={s.productsNumber}>{productsLength}</div>
        )}
      </div>
      {cartItems && cartOpen && (
        <div className={s.cart}>
          <h2>CART</h2>
          {cartItems.length === 0 ? <p className={s.cartVacio}>Cart is empty</p> : (
            <div className={s.productsContainer}>{cartItems.map((item, i) => (
              <ProductItem key={i} item={item} />
            ))}
            </div>
          )}
          <h2 className={s.total}>Total: ${total}</h2>
          {console.log('cartItems:',cartItems)}
          <button className={s.buy} 
            onClick={handlePayment}>BUY</button>
        </div>
      )}
    </div>
  )
}

export default Cart;
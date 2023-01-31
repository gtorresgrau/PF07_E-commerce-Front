
import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { CartContex } from './CardContex';
import ProductItem from './ProductItem';
//import { useDispatch } from 'react-redux';
import s from './Styles/Cart.module.css'
import { useAuth0 } from '@auth0/auth0-react';

import { Link } from 'react-router-dom';

//import { guardarInfo } from '../Actions/Actions';
import { LoginButton } from './Loginbutton.jsx'
import { CgShoppingCart } from "react-icons/cg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';



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




  const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0)

  return (
    <div /* className={s.cartContainer} */>
      <div onClick={() => { setCartOpen(!cartOpen) }} className={s.buttonCartContainer}>
      <div className={s.buttonCart}>
          { ! cartOpen 
            ? <ShoppingCartIcon sx={{ fontSize: 30 }}/>
            : <CloseIcon sx={{ fontSize: 30 }}/>
          }
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

          {console.log('cartItems:', cartItems)}
          {/* {console.log("USERDDDDDD", user)} */}
          {user ? <Link to='/checkoutForm' ><button className={s.buy} disabled={!cartItems.length}>CHECKOUT</button></Link> : <button className={s.buy}><LoginButton /></button>}

        </div>
      )}
    </div>
  )
}

export default Cart;
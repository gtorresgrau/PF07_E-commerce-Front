import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { getAddToCart, removeOneItem, resetCart } from '../Actions/Actions';
import { removeFromCartItem } from '../Actions/Actions'



function ShoppingCart() {

  const dispatch = useDispatch();
  //const allSneakers = useSelector(state => state.sneakers);
  const cart = useSelector(state => state.cart)

  /*  const [text, setText] = useState(cart)
 
   const setLocalStorage = cart => {
     try {
       setText(cart)
       window.localStorage.setItem("Sneaker", cart)
     } catch (e) {
       console.log(e)
     }
   }
 
   useEffect(() => {
     setLocalStorage()
   }, [cart]) */

  var montoTotal = 0
  for (let i = 0; i < cart.length; i++) {
    montoTotal += cart[i].quantify * cart[i].price
  }

  const clearCart = () => {
    dispatch(resetCart())
  };

  const removeAll = (arg) => {
    dispatch(removeFromCartItem(arg))
  };

  const addMasProduct = (arg) => {
    dispatch(getAddToCart(arg))
  };

  const removeOne = (arg) => {
    dispatch(removeOneItem(arg))
  }

  useEffect(() => {
    let data = localStorage.getItem("Item",)
    if (data) {
      console.log(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Link to="/sneakers"><button>← BACK</button></Link>
      <div>
        <h2>Cart</h2>
        {!cart.length ? <span>Tu carrito está vacío</span> : cart.map(e => (
          <ProductItem key={e.id} title={e.title} price={e.price} image={e.image} id={e.id} removeAll={removeAll} removeOne={removeOne} addMasProduct={addMasProduct} quantify={e.quantify} />
        ))}
        <br />
        <button onClick={clearCart}>Clear Cart</button>
        <h3>TOTAL: ${montoTotal},00</h3>
        <button>PAGAR</button>
      </div>
    </div>
  )
}

export default ShoppingCart;
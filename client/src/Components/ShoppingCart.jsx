import React, { useEffect /*, useState*/ } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { getAddToCart, removeOneItem, resetCart, removeFromCartItem } from '../Actions/Actions';
//import {useLocalStorage} from '../useLocalStorage';



function ShoppingCart() {

  const dispatch = useDispatch();
  //const allSneakers = useSelector(state => state.sneakers);
  const cart = useSelector(state => state.cart)
  //const [buys, setbuys] = useLocalStorage(cart,'The Cart is empty')

  console.log('cart:', cart)
  // console.log('buys:', buys)

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
    let data = localStorage.getItem("Item")
    let parsed = [];
    if (!data) {
      console.log(JSON.parse(data))
      localStorage.setItem("Item", JSON.stringify([]))
  } else {
    parsed = JSON.parse(data)
  }
}
  , [])

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(cart));
   cart = [localStorage.getItem("Item")];
  }, [cart])
   
  return (
    <div>
      <Link to="/sneakers"><button>← BACK</button></Link>
      <div>
        <h2>Cart</h2>
        <div>
          {!cart.length ? <span>Your Cart is empty</span> : cart.map(e => (
            <ProductItem key={e.id} title={e.title} price={e.price} image={e.image} id={e.id} removeAll={removeAll} removeOne={removeOne} addMasProduct={addMasProduct} quantify={e.quantify} />
          ))}
        </div>
        <br />
        <button onClick={clearCart}>Clear Cart</button>
        <h3>TOTAL: ${montoTotal},00</h3>
        <Link to='/payment'><button>PAGAR</button></Link>
      </div>
    </div>
  )
}

export default ShoppingCart;
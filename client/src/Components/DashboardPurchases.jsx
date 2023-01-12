import React, { useState, useContext ,useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import s from './Styles/Cart.module.css'

import { CartContex } from './CardContex';
import ProductItemPurchase from './ProductItemPurchase';


function Dashboard() {
    const [purchases, setPurchases] = useState([]);

    const { cartItems } = useContext(CartContex);
    const [productsLength, setProductsLength] = useState(0);
    const { user } = useAuth0();
    const [localCartItems, setLocalCartItems] = useState([]);

    useEffect(() => {
        setLocalCartItems(cartItems);
      }, [cartItems]);

      useEffect(() => {
        localStorage.setItem('localCartItems', JSON.stringify(localCartItems));
      }, [localCartItems]);

       useState(() => {
        try {
          const localCartItemsEnLocalStorage = localStorage.getItem('localCartItems')
          return localCartItemsEnLocalStorage ? JSON.parse(localCartItemsEnLocalStorage) : []
        } catch (e) {
          return [];
        };
      });
   
    
    
  
      useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    )
  }, [cartItems])

  /*  const mercadoPago = (e) => {
     dispatch(payment(e))
   } */




  const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0)

    useEffect(() => {
        const getPurchases = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/purchases');
                setPurchases(data);
            } catch (err) {
                console.error(err);
            }
        };
        getPurchases();
    }, []);

    return (
        <div>
          
            <h2>Purchases</h2>
          {cartItems.length === 0 ? <p className={s.cartVacio}>No Purchases</p> : (
            <div className={s.productsContainer2}>{localCartItems.map((item, i) => (
              <ProductItemPurchase key={i} item={item} />
            ))}
            </div>
          )}
          <h2 className={s.total}>Total: ${total}</h2>
            <Link to="/sneakers"><button >← BACK</button></Link>
        </div>
    );
}

export default Dashboard ;
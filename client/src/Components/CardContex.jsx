import React, { createContext, useEffect, useState } from 'react'

export const CartContex = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem('cardProducts')
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []
    } catch (e) {
      return [];
    };
  });

  useEffect(() => {
    localStorage.setItem('cardProducts', JSON.stringify(cartItems));
    //console.log(cartItems);
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
    if (inCart) {
      setCartItems(cartItems.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...inCart, quantity: inCart.quantity + 1 };
        } else return productInCart
      }));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  };
  const deleteItemToCart = (product) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter(productInCart => productInCart.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, quantity: inCart.quantity - 1 }
          } else return productInCart
        }));
    }
  };

  return (
    <CartContex.Provider value={{ cartItems, addItemToCart, deleteItemToCart }}>
      {children}
    </CartContex.Provider>
  )
}; 

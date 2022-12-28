import React, { createContext, useEffect, useState } from 'react'



export const FavContainerContext = createContext();

export const FavProvider = ({ children }) => {
    const [favItems, setFavItems] = useState(() => {
      try {
        const favEnLocalStorage = localStorage.getItem('favProducts')
        return favEnLocalStorage ? JSON.parse(favEnLocalStorage) : []
      } catch (e) {
        return [];
      };
    });

 

    useEffect(() => {
      localStorage.setItem('favProducts', JSON.stringify(favItems));
      //console.log(cartItems);
    }, [favItems]);
  
    const addItemToFav = (product) => {
      const inFav = favItems.find((productInFav) => productInFav.id === product.id);
      if (inFav) {
        setFavItems(favItems.map((productInFav) => {
          if (productInFav.id === product.id) {
            return { ...inFav, quantity: inFav.quantity + 1 };
          } else return productInFav
        }));
      } else {
        setFavItems([...favItems, { ...product, quantity: 1 }])
      }
    };
    const deleteItemToFav = (product) => {
      const inFav = favItems.find((productInFav) => productInFav.id === product.id);
  
      if (inFav.quantity === 1) {
        return null
      } else {
        setFavItems(
          favItems.map((productInFav) => {
            if (productInFav.id === product.id) {
              return { ...inFav, quantity: inFav.quantity - 1 }
            } else return productInFav
          }));
      }
    };
  
    const deleteAll = (product) => {
      setFavItems(
        favItems.filter(productInFav => productInFav.id !== product.id)
      );
    }
  
    return (
      <FavContainerContext.Provider value={{ favItems, addItemToFav, deleteItemToFav, deleteAll }}>
        {children}
      </FavContainerContext.Provider>
    )
  }; 



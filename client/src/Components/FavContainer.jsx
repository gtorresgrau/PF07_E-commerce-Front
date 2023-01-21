import React, { useContext, useEffect,useState } from "react";
import FavItem from "./FavItem";
import { FavContainerContext } from "./FavContainerContext";
import s from './Styles/Fav.module.css'
import { FaHeart  } from 'react-icons/fa';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

function Fav() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const { favItems } = useContext(FavContainerContext);

  

  useEffect(() => {
    setProductsLength(
      favItems.reduce((previous, current) => previous + current.quantity, 0)
    )
  }, [favItems])


return (
<div /* className={s.cartContainer} */>
      <div onClick={() => { setCartOpen(!cartOpen) }} className={s.buttonCartContainer}>
        <div className={s.buttonCart}>
          { ! cartOpen 
            ? <FavoriteIcon sx={{ fontSize: 30 }}/>
            : <CloseIcon sx={{ fontSize: 30 }}/>
          }
        </div>
        {!cartOpen && (
          <div className={s.productsNumber}>{productsLength}</div>
        )}
      </div>
      {favItems && cartOpen && (
        <div className={s.cart}>
          <h2>FAVORITES</h2>
          {favItems.length === 0 ? <p className={s.cartVacio}>No favorites added</p> : (
            <div className={s.productsContainer}>{favItems.map((item, i) => (
              <FavItem key={i} item={item} />
            ))}
            </div>
          )}
         
        </div>
      )}
    </div>
        
    );
};

export default Fav;
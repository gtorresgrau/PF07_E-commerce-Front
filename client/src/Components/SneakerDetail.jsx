import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getSneakerDetail, resetDetail } from '../Actions/Actions';
import Loading from './Loading';
import s from './Styles/Detail.module.css';
import Navbar from './NavBar';
import Reviews from './Reviews';
import { CartContex } from "./CardContex.jsx";
import RatingStar from './RatingStar';
import { FavContainerContext } from './FavContainerContext';

export default function SneakerDetail() {

  const { addItemToCart } = useContext(CartContex);
  const sneaker = useSelector(state => state.detail);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { addItemToFav } = useContext(FavContainerContext);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSneakerDetail(id));
    return function cleanup() {
      dispatch(resetDetail());
    };
  }, [dispatch, id])

  return (
    <div>
      <Navbar />
      {loading ? <Loading /> :
        <div className={s.containerG}>
          <div className={s.containerimg}>
            <img className={s.img} src={sneaker.image} alt="img not found" />
          </div>

          <div className={s.containertext}>
            <div className={s.title}>
              <h1>{sneaker.title}</h1>
              <h3>{sneaker.rating}</h3>
              <h2>{sneaker.brand}</h2>
              <h2>${sneaker.price}</h2>
              <h3>Size: <span className={s.stock}>{sneaker.size && sneaker.size.map((e) => {
                return (
                  <div key={e}><p> ✔  {e}  </p></div>
                )
              })
              }</span></h3>
              <h3>Stock: <span>{sneaker.stock > 0 ? 'Available' : 'Without Stock'}</span></h3>
              <h3>Colour: <span>{sneaker.colour}</span></h3>
              <h3>Genre: <span>{sneaker.genre}</span></h3>
              <p>{sneaker.description}</p>
              <Link to="/sneakers"><button className={s.btn}>← BACK</button></Link>
              <button className={s.btn} onClick={() => addItemToCart(sneaker)}>Add To Cart</button>
              <button className={s.btn} onClick={() => addItemToFav(sneaker)}>Add To Fav</button>
            </div>
            <div>
              <RatingStar/>
              <Reviews />
              <input 
                type="submit" 
                value='SUBMIT RATING' 
                className={s.btn} 
            />
            </div>
          </div>
        </div>
      }
    </div >
  )
};
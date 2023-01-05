import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getSneakerDetail, resetDetail, getAllReviews } from '../Actions/Actions';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Loading';
import s from './Styles/Detail.module.css';
import Navbar from './NavBar';
import { CartContex } from "./CardContex.jsx";
import RatingStar from './RatingStar';
import { FavContainerContext } from './FavContainerContext';

export default function SneakerDetail() {

  const { addItemToCart } = useContext(CartContex);
  const sneaker = useSelector(state => state.detail);
  const loading = useSelector(state => state.loading);
  const reviewsById = useSelector(state=>state.reviews);
  const dispatch = useDispatch();

  const { addItemToFav } = useContext(FavContainerContext);
  const { id } = useParams();
  const { isAuthenticated} = useAuth0();

  useEffect(() => {
    dispatch(getSneakerDetail(id));
    return function cleanup() {
      dispatch(resetDetail());
    };
  }, [dispatch, id])

  
 // useEffect(()=>{
 //   if(isAuthenticated){dispatch(getAllReviews(id))};
  //},[dispatch,id])
  

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
              <h3>Type: <span>{sneaker.type}</span></h3>
              <p>{sneaker.description}</p>
              <Link to="/sneakers"><button className={s.btn}>← BACK</button></Link>
              <button className={s.btn} onClick={() => addItemToCart(sneaker)}>Add To Cart</button>
              <button className={s.btn} onClick={() => addItemToFav(sneaker)}>Add To Fav</button>
            </div>
            <div>
            { isAuthenticated ?<RatingStar sneaker={sneaker}/>:null}
            </div>
            <div>
              <h2>Some people said: </h2>
              <span className={s.cardsReview}>{reviewsById && reviewsById.map((e) => {
                return (
                  <div key={e}>
                    <p>Rating: {e.stars} </p>
                    <p>Review: {e.text} </p>

                    </div>
                )
              })
              }</span>
            </div>
          </div>
        </div>
      }
    </div >
  )
};
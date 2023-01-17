import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getSneakerDetail, resetDetail} from '../Actions/Actions';
import { useAuth0 } from '@auth0/auth0-react';
import {FaStar} from 'react-icons/fa';
import Loading from './Loading';
import s from './Styles/Detail.module.css';
import S from './Styles/Reviews.module.css';
import Navbar from './NavBar';
import { CartContex } from "./CardContex.jsx";
import RatingStar from './RatingStar';
import { FavContainerContext } from './FavContainerContext';
import Footer from './Footer';

export default function SneakerDetail() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  const { addItemToCart } = useContext(CartContex);
  const sneaker = useSelector(state => state.detail);
  const loading = useSelector(state => state.loading);
  const usersInDb = useSelector((state) => state.users);
  const { addItemToFav } = useContext(FavContainerContext);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSneakerDetail(id))
  }, [dispatch, id])

  useEffect(() => {
    if (!id)
      return function cleanup() {
        dispatch(resetDetail());
      };
  }, [dispatch, id])

  console.log('usersIndb:',usersInDb)


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
                  <h3>Size: <span>{sneaker.size}</span></h3>
                  <h3>Stock: <span>{sneaker.stock > 0 ? 'Available' : 'Without Stock'}</span></h3>
                  <h3>Colour: <span>{sneaker.colour}</span></h3>
                  <h3>Genre: <span>{sneaker.genre}</span></h3>
                  <h3>Type: <span>{sneaker.type}</span></h3>
                  <p>{sneaker.description}</p>

                  <br/>
                  <Link to="/sneakers"><button className={s.btn}>← BACK</button></Link>
                  {sneaker.stock ? <button className={s.btn} onClick={() => addItemToCart(sneaker)}>Add To Cart</button> : <button className={s.btnn}>Without Stock</button>}
                  <button className={s.btn} onClick={() => addItemToFav(sneaker)}>Add To Fav</button>
                </div>
                <div>
                  {isAuthenticated? <RatingStar sneaker={sneaker}/> : null}
                </div>
                <div>
                  <h2>Some people said: </h2>
                  <div className={S.containerRevs}>
                        {sneaker.Reviews === undefined || !sneaker.Reviews.length ? <h3>There are no reviews for this sneaker, be the First.</h3> : sneaker.Reviews.map(e => {
                          return (
                            <div className={S.review} key={e.userId}>
                              <div className={S.values}>
                                  <div className={S.user}>
                                    <h2>{e.userId}</h2>
                                  </div>
                                  <div className={S.stars}>
                                  {[...Array(5)].map((star, i)=>{
                                  const ratingValue = i+1;
                                  const stars = e.stars
                                      return (
                                          <label key={e.text+stars+i} ><FaStar color={ ratingValue <= stars  ? '#ffff00' : '#808080' }/> </label>
                                      )
                                  })}
                                  </div>
                              </div>
                              <div className={S.text}><h2>{e.text}</h2></div>
                            </div>
                          )
                        })}
                  </div>
                </div>
              </div>
          </div>
        }
        <footer>
                <div className={S.footer}><Footer /></div>
        </footer>
    </div >
  )
};
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getSneakerDetail, resetDetail } from '../Actions/Actions';
import Loading from './Loading';
import Error404 from './Error404';
import s from './Styles/Detail.module.css';



function SneakerDetail() {

  const detail = useSelector(state => state.detail);
  console.log(detail)
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSneakerDetail(id));
    return function cleanup() {
      dispatch(resetDetail());
    };
  }, [dispatch, id])

  return (
    <div>
      {loading ? <Loading /> : detail.length ? detail.map(sneaker => {
        return (
          <div className={s.containerG}>
            <div className={s.container1}>
              <Link to="/home"><button className={s.btn}>← BACK</button></Link>
              <br />
              <div className={s.detail}>
                <h2 className={s.principal}>{sneaker.title}</h2>
                <h2 className={s.principal}>{sneaker.brand}</h2>
                <h4>Model: <span className={s.principal}>{sneaker.model}</span></h4>
                <img className={s.img} src={sneaker.image} alt="img not found" witdh="300px" height="200px" />
                <br />
                <h3>$ <span>{sneaker.price}</span></h3>
                <span>{sneaker.description}</span>
                <h3>Size: <span>{sneaker.size}</span></h3>
                <h3>Stock: <span>{sneaker.stock}</span></h3>
                <h3>Colour: <span>{sneaker.colour}</span></h3>
              </div>
            </div>
            <div className={s.container2}>
              <h4 className={s.reviews}><h3 className={s.textReviews}>Reviews: </h3>{sneaker.reviews.length ? sneaker.reviews.map(review => {
                return (
                  <span>{review}</span>
                )
              }) : <span>Has no reviews</span>}</h4>
            </div>
          </div>
        )
      }) : <Error404 />}
    </div>
  )
}

export default SneakerDetail;
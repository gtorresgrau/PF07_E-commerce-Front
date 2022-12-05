import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getSneakerDetail, resetDetail } from '../Actions/Actions';
import Loading from './Loading';
import s from './Styles/Detail.module.css';



export default function SneakerDetail() {

  const sneaker = useSelector(state => state.detail);
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
      {loading ? <Loading /> :
        <div className={s.containerG}>
          <div className={s.container1}>
            <Link to="/sneakers"><button className={s.btn}>← BACK</button></Link>
            <br />
            <div className={s.principal}>
              <h2 className={s.principal}>{sneaker.brand}</h2>
              <h2 className={s.principal}>{sneaker.title}</h2>
              <img className={s.img} src={sneaker.image} alt="img not found" witdh="200px" height="200px" />
              <br />
              <h3>$ <span>{sneaker.price}</span></h3>
              <h3>Size: <span>{sneaker.size}</span></h3>
              <h3>Stock: <span>{sneaker.stock}</span></h3>
              <h3>Colour: <span>{sneaker.colour}</span></h3>
              <h3>Genre: <span>{sneaker.genre}</span></h3>
              <span>{sneaker.description}</span>
            </div>
          </div>
          {/*    <div className={s.container2}>
              <h4 className={s.activities}><h3 className={s.textAct}>Tourist activities: </h3>{sneaker.activities.length ? sneaker.activities.map(e => {
                return (
                  <ul className={s.ull}>
                    <li>Name: <span>{e.nombre}</span></li>
                    <li>Difficulty: <span>{e.dificultad}/5</span></li>
                    <li>Duration: <span>{e.duracion}hs.</span></li>
                    <li>Season: <span>{e.temporada}</span></li>
                  </ul>
                )
              }) : <span>Has no activities</span>}</h4>
            </div> */}
        </div>

      }
    </div>
  )
};
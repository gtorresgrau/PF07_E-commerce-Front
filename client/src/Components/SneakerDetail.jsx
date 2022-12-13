import React, { useEffect /*, useState*/ } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAddToCart, getSneakerDetail, resetDetail } from '../Actions/Actions';
import Loading from './Loading';
import s from './Styles/Detail.module.css';
import Navbar from './NavBar';
//import { useLocalStorage } from '../useLocalStorage.js';


export default function SneakerDetail() {

  const sneaker = useSelector(state => state.detail);
  const cart = useSelector(state => state.cart);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();


  /* const [text, setText] = useState(
    window.localStorage.getItem("Sneaker")
  )

  const setLocalStorage = sneaker => {
    try {
      setText(sneaker)
      window.localStorage.setItem("Sneaker", JSON.stringify(sneaker))
    } catch (e) {
      console.log(e)
    }
  } */
  //const [buys, setbuys] = useLocalStorage('buys', 'The Cart is empty')

  console.log('cart:', cart)

  const addToCart = (sneaker) => {
    //console.log(sneaker);
    //setLocalStorage(sneaker)
    dispatch(getAddToCart(sneaker));
    alert("successfully added");
    history.push("/shop");
  }

  /*  const guardarInStorage = () => {
     localStorage.setItem("Item", JSON.stringify(sneaker))
   } */


  //const [currentPage, setCurrentPage] = useState(1);


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
              <button onClick={() => addToCart(sneaker)}>Add Cart</button>
              <Link to="/sneakers"><button className={s.btn}>← BACK</button></Link>
            </div>
          </div>

        </div>

      }
    </div >
  )
};
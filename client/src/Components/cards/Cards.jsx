import React from "react";
import Card from "../card/Card";
import styles from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
//import { FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { getAllSneackers } from "../../Actions/Actions";

export default function Cards() {
  
    const dispatch = useDispatch();
    const allSneackers = useSelector(state => state.sneakers)
   
    useEffect(() => {
        dispatch(getAllSneackers());
    }, [dispatch]);

  return (
    <div>
        <div className={styles.container}>
        { allSneackers?.map( c => {
            return (
                <div key={c.id}>
                    <Link to={'/sneakers/'+ c.id}>
                        <Card image={c.image} title={c.title} price={c.price} type={c.type} key={c.id}/>
                    </Link>
                </div>
            )
        })
        }
        </div>
     
    </div>
  );
}
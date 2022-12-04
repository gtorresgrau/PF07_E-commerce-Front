import React from "react";
import Card from "../card/Card";
import styles from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { getAllSneackers } from "../../Actions/Actions";

export default function Cards() {
  
    const dispatch = useDispatch();
    const allSneackers = useSelector(state => state.sneackers)
   
    useEffect(() => {
        dispatch(getAllSneackers());
    }, []);

  return (
    <div>
        <div className={styles.container}>
        { allSneackers?.map( c => {
            return (
                <div>
                    <Card image={c.image} title={c.title} price={c.price} type={c.type}/>
                </div>
            )
        })
        }
        </div>
     
    </div>
  );
}
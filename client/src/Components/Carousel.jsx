import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardOffer from "./CardOffer";
import { Link } from "react-router-dom";
import S from './Styles/Home.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSneackers } from "../Actions/Actions";
import "./Styles/Carousel.css";


export default function SimpleSlider() {
  const dispatch = useDispatch();
  
  const allSneakers = useSelector((state) => state.allSneakers);
  const elementOff = allSneakers.filter(e => e.price>50)
  //const allGen = useSelector((state) => state.allSneakers);
  
  useEffect(() => {
    dispatch(getAllSneackers())
  }, [dispatch]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  // let Genres =[];
  //   allGen.map(e => ( Genres.push(e.genre)));
  //   const datag = new Set(Genres)
  //   let allGenres = [...datag] 
  
    

  return (
    <Slider {...settings} className="carousel">
      {elementOff?.map(c => {
        return (
            <div key={c.id}>
                <Link to={'/sneakers/' + c.id} className={S.link}>
                    <CardOffer image={c.image} title={c.title} price={c.price} type={c.type} key={c.id} />
                </Link>
            </div>
        )
    })
    }
    </Slider>
  );
}
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
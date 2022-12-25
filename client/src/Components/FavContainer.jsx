import React, { useEffect, useState  } from "react";
//import Navbar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";
import { Link, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";




export  const FavContainer = (props) => {

    var heart = JSON.parse(localStorage.getItem("favorites")) || [];
    
    
    const [favorites, setFavorites] = useState(heart);
    const [selected, setSelected] = useState(false);
    
    const alertNoFav = () => {
      let history= useHistory;
      Swal.fire({
        title: "Dont have any fav",
        text: "You can add fav and see it here",
        icon: "info",
        confirmButtonText: "Ok",
      }).then(() => history.push("/sneakers"));
    };
    if (heart.length === 0) {
      alertNoFav();
    }

    const addFavorites = (props) => {
      if (!selected) {
        setFavorites([...favorites, props]);
        setSelected(true);
        Swal.fire({
          icon: "success",
          title: "Added to favorites",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          title: "Deleted",
          text: "Deleted from favorites",
          icon: "warning",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1000,
        });
        const newF = favorites.filter((fav) => fav.id !== props.id);
        setFavorites(newF);
        setSelected(false);
      }
    };
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
      if (favorites.filter((e) => e.id === props.id).length > 0) {
        setSelected(true);
      }
    }, [favorites, props.id]);

    return(
      <>
     
       <div>
       {heart.map((props) => (
          <Card image={props.image} title={props.title} price={props.price} type={props.type} key={props.id} id={props.id}  />
        ))}
        
       </div>
     <p> favoritos</p>
     <Link to="/sneakers"><button >← BACK</button></Link>
       <div>
        ma
       </div>
      <Footer/>
      </>
        
    );
};
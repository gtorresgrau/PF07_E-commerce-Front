import React, { useContext, useState } from "react";
import S from './Styles/Card.module.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContex } from "./CardContex";
import { FavContainerContext } from './FavContainerContext';

export default function Card(props) {
const { addItemToCart } = useContext(CartContex);
const { deleteAll, addItemToFav } = useContext(FavContainerContext);
const { items: favItems } = useContext(FavContainerContext) || { items: [] };

const [isInFav, setIsInFav] = useState(favItems && favItems.some((productInFav) => productInFav.id === props.id));




const modifiedProduct = {
...props,
isFav: isInFav,
};

const handleAddToFav = () => {
addItemToFav(modifiedProduct);
setIsInFav(true);
};

const handleRemoveFromFav = () => {
  deleteAll(modifiedProduct);
setIsInFav(false);
};

return (
<div className={S.container}>
{modifiedProduct.isFav ? (
<FaHeart  className={S.icon}  onClick={handleRemoveFromFav} />
) : (
<FaRegHeart  className={S.icon} onClick={handleAddToFav} />
)}
<Link to={"/sneakers/" + props.id}>
<img src={props.image} alt="imagen no encontrada" className={S.img} />
<div className={S.price}>${props.price}</div>
<p className={S.title}>{props.title}</p>
<p className={S.type}>{props.type}</p>
</Link>
<button className={S.addToCart} onClick={() => addItemToCart(props)}>
Add To Cart
</button>
</div>
);
}




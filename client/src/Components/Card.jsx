import React, { useContext, useState } from "react";
import S from './Styles/Card.module.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
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
<CgShoppingCart  onClick={() => addItemToCart(props)} className={S.iconCart} />
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
</div>
);
}




import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem(props) {

  let subTotal = props.price * props.quantify
  return (
    <div>
      <Link to={`/sneakers/${props.id}`}><h4>{props.title}</h4></Link>
      <h4>${props.price},00 x {props.quantify} = ${subTotal},00</h4>
      <img src={props.image} alt="sneaker" height='100px' width='100px' />
      <button onClick={() => props.removeAll(props.id)}>X</button>
      <br />
      <button disabled={props.quantify === 1} onClick={() => props.removeOne(props)}>-</button>
      <p>{props.quantify}</p>
      <button onClick={() => props.addMasProduct(props)}>+</button>
    </div>
  )
}

export default ProductItem;
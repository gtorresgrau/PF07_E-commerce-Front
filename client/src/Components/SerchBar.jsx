import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSneakerByName } from '../Actions/index.js'
import Style from './Styles/SearchBar.module.css'

//setCurrenPage es para setear la pagina en 1 cuando haga la busqueda.
export default function SearchBar({ setCurrenPage }) {

  const dispatch = useDispatch();
  const [input, setInput] = useState("")

  const handlerOnchange = (e) => {
    console.log(e)
    setInput(e.target.value)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrenPage(1);
    dispatch(getSneakerByName(input))
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={Style.input_search} name='input' onChange={handlerOnchange} type='text' placeholder="Sneaker...." value={input} autoComplete='off' />
        <button className={Style.btn_search} type="submit">SEARCH</button>
      </form>
    </div>
  )
};  
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSneakerByName } from '../Actions/Actions.js'
import S from './Styles/SearchBar.module.css'

//setCurrenPage es para setear la pagina en 1 cuando haga la busqueda.
export default function SearchBar({ setCurrentPage }) {
//console.log('searchbar -->','setCurrentPage:',setCurrentPage)

  const dispatch = useDispatch();
  const [input, setInput] = useState("")

  const handlerOnchange = (e) => {
    //console.log('event:',e)
    setInput(e.target.value)
    console.log('valor:',e.target.value)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getSneakerByName(input))
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={S.input_search} name='input' onChange={handlerOnchange} type='text' placeholder="Sneaker...." value={input} autoComplete='off' />
        <button className={S.btn_search} type="submit">SEARCH</button>
      </form>
    </div>
  )
};  
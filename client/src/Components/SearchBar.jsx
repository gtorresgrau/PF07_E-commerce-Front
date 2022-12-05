import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSneakerByName } from '../Actions/Actions.js';
import { useHistory } from 'react-router-dom';
import S from './Styles/SearchBar.module.css';

//setCurrenPage es para setear la pagina en 1 cuando haga la busqueda.
export default function SearchBar({ currentPage, setCurrentPage }) {
  //console.log('searchbar -->','setCurrentPage:',setCurrentPage)

  const history = useHistory()
  const dispatch = useDispatch();
  const [input, setInput] = useState("")
  const sneakers = useSelector(state => state.sneakers);

  const handlerOnchange = (e) => {
    //console.log('event:',e)
    setInput(e.target.value)
    console.log('valor:', e.target.value)
  };

 // console.log(setCurrentPage);
  const handleSubmit = (e) => {
    e.preventDefault();
    const sneakersFilter = sneakers.filter(e => e.title.toLowerCase().includes(input.toLowerCase())) //---> []
    if (!input) alert("You must enter a name");
    if (!sneakersFilter.length) {
      history.push("/Error404")
      //alert("There are no countries with the entered text")
      setInput('')
    } else {
      setCurrentPage(1)
      dispatch(getSneakerByName(input))
      setInput('')
    }
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
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSneackers, getSneakerByName } from '../Actions/Actions.js';
import S from './Styles/SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';

//setCurrenPage es para setear la pagina en 1 cuando haga la busqueda.
export default function SearchBar({ currentPage, setCurrentPage }) {
  //console.log('searchbar -->','setCurrentPage:',setCurrentPage)


  const dispatch = useDispatch();
  const [input, setInput] = useState("")
  const sneakers = useSelector(state => state.allSneakers);
  const handlerOnchange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
    console.log('valor:', e.target.value)
  };

  //console.log(setCurrentPage);
  const handleSubmit = (e) => {
    e.preventDefault();
    const sneakersFilter = sneakers.filter(e => e.title.toLowerCase().includes(input.toLowerCase())) //---> []
    if (!input) alert("You must enter a name");
    if (!sneakersFilter.length) {
      alert(`There are no Sneackers with the combination of Characters entered: ${input}`)
      dispatch(getAllSneackers())
      setInput('')
    } else {
      setCurrentPage(1)
      dispatch(getSneakerByName(input))
      setInput('')
    }
  }

  return (
    <div>
      <div className={S.form}>
        <input
          value={input}
          id='search'
          type='text'
          placeholder="Sneaker...."
          onChange={(e) => handlerOnchange(e)}
          className={S.input_search}
          autoComplete='off'>
        </input>
        <div className={S.btn_search} onClick={(e) => handleSubmit(e)} >
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            smooth
            to='/sneakers#displaySearch'
          >
            <FiSearch />
          </Link>
        </div>

      </div>
    </div>
  )
};  
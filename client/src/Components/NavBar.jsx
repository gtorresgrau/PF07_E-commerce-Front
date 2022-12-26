import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/logo2.png';
import SearchBar from './SearchBar';
import S from './Styles/NavBar.module.css'
import { getAllSneackers } from '../Actions/Actions';




import AccountMenu from './AccountMenu';
import Cart from './Cart';
import Fav from './FavContainer';


export default function Navbar({ setCurrentPage, currentPage }) {
  const dispatch = useDispatch();

  const handleAllSneakers = (e) => {
    e.preventDefault();
    dispatch(getAllSneackers());
    setCurrentPage(1);
  }

  return (
    <nav className={S.display}>
      <div className={S.displayLeft}>
        <Link to='/sneakers' onClick={e => handleAllSneakers(e)}>
          <img className={S.logo} src={logo} width="250rem" alt='Hsneaker' />
        </Link>
        <NavLink className={S.links} to='#'>FILTERS</NavLink>
      </div>
      <div className={S.displayRight}>
        <div className={S.SearchBar}>
          <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <div>
          <Cart />
        </div>
        <div className={S.displayLinks}>
          <AccountMenu />
          

        <div className="">
          <Fav />
          </div>
        
        </div>
      </div>
    </nav>
  )
};
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/logo2.png';
import SearchBar from './SearchBar';
import S from './Styles/NavBar.module.css'
import AccountMenu from './AccountMenu';
import Cart from './Cart';
import Fav from './FavContainer';


export default function Navbar({ setCurrentPage, currentPage }) {


  return (
    <nav className={S.display}>
      <div className={S.displayLeft}>
        <Link to='/sneakers'>
          <img className={S.logo} src={logo} width="250rem" alt='Hsneaker' />
        </Link>
        <NavLink className={S.links} to='#'>FILTERS</NavLink>
      </div>
      <div className={S.displayRight}>
        <div className={S.SearchBar}>
          <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <div className={S.displayLinks}>
          <div className={S.cart}>
            <Cart />
          </div>

          <div className={S.heart}>
            <Fav />
          </div>

          <div className={S.heart}>
            <AccountMenu />
          </div>
        </div>
      </div>
    </nav>
  )
};
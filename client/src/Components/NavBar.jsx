import React from 'react';
//import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import icon from '../Images/cart.png'
import S from './Styles/NavBar.module.css'
import { useDispatch } from 'react-redux';
import { getAllSneackers } from '../Actions/Actions';

export default function Navbar({ setCurrentPage, currentPage }) {

    //const [woman, setWoman] = useState('')
    //const [men, setMen] = useState('')
    const dispatch = useDispatch()

    const handleAllSneakers = (e) => {
        e.preventDefault();
        dispatch(getAllSneackers());
        setCurrentPage(1);
    }


    return (
        <header className={S.headerContainer}>
            <Link to='/sneakers' onClick={e => handleAllSneakers(e)} className={S.links} ><div className={S.headerLogo}><p>Henry Sneakers</p></div></Link>
            <select name="" id="" defaultValue='Woman' className={S.filter}>
                <option value='Woman'> Woman</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select>
            <select name="" id="" defaultValue='men' className={S.filter}>
                <option value='men'> Men</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select>

            <div className={S.SearchBar}>
                <SearchBar currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>

            <div className="">
                <Link to='/blog'><button className={S.btn} >Blog</button></Link>
            </div>
            <div className="">
                <Link to='/aboutUs'><button className={S.btn} >About us</button></Link>
            </div>
            <div className="">
                <Link to='/account'><button className={S.btn} >Account</button></Link>
            </div>
            <div className="">
                <Link to='/singIn'><button className={S.singInButton} >Sing in</button></Link>
            </div>
            <div className="">
                <Link to='/join'><button className={S.joinNowButton} >Join Now</button></Link>
            </div>
            <div className={S.divCart}>
                <Link to='/shop'><img src={icon} alt="cart" className={S.cart} /></Link>
            </div>
        </header>
    )
};
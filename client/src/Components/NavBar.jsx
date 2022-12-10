import React from 'react';
//import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import S from './Styles/NavBar.module.css'
import { useDispatch } from 'react-redux';
import { getAllSneackers } from '../Actions/Actions';
import logo from '../Images/logo.png';
import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';


export default function Navbar({ setCurrentPage, currentPage }) {
    const dispatch = useDispatch()

    // const [woman, setWomen] = useState();
    // const [men, setMen] = useState();
    // const [kids, setkids] = useState();

    const handleAllSneakers = (e) => {
        e.preventDefault();
        dispatch(getAllSneackers());
        setCurrentPage(1);
    }


    return (
        <header className={S.headerContainer}>
            <Link to='/sneakers' onClick={e => handleAllSneakers(e)} className={S.links} >
                <div className={S.headerLogo}>
                    <img src={logo} width="250rem" alt='Hsneaker'/>
                </div>
            </Link>
            <div className={S.SearchBar}>
                <SearchBar currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>
            {/* 
            <div className="">
                <Link to='/blog'><button className={S.btn} >Blog</button></Link>
            </div>      
            <div className="">
                <Link to='/aboutUs'><button className={S.btn} >About us</button></Link>
            </div> */}
            <div className="">
                <Link to='/account'className={S.cart}><HiOutlineUser/></Link>
            </div>
            <div className={S.divCart}>
                <Link to='/shop' className={S.cart}><CgShoppingCart/></Link>
            </div>
            <div className="">
                <Link to='/singIn'><button className={S.singInButton} >Sing in</button></Link>
            </div>
            <div className="">
                <Link to='/join'><button className={S.joinNowButton} >Join Now</button></Link>
            </div>
        </header>
    )
};
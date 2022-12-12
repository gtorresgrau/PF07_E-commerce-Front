import React from 'react';
//import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import S from './Styles/NavBar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllSneackers } from '../Actions/Actions';
import logo from '../Images/logo.png';
import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';


export default function Navbar({ setCurrentPage, currentPage }) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    var totalCart = 0
    for (let i = 0; i < cart.length; i++) {
        totalCart += cart[i].quantify
    }


    // const [woman, setWomen] = useState();
    // const [men, setMen] = useState();
    // const [kids, setkids] = useState();

    const handleAllSneakers = (e) => {
        e.preventDefault();
        dispatch(getAllSneackers());
        setCurrentPage(1);
    }

    function handlerFilterMen(e) {
        // dispatch(getFilter(e.target.value))
        // setCurrentPage(1);
        // setWomen('')
        // // setkids('')
        // console.log(e.target.value)
    }
    function handlerFilterWomen(e) {
        // dispatch(getFilter(e.target.value))
        // setCurrentPage(1);
        // setMen('')
        // // setkids('')
        // console.log(e.target.value)
    }
    function handlerFilterKids(e) {
        //e.preventDefault()
        // dispatch(getFilter(e.target.value))
        // setCurrentPage(1);
        // setMen('')
        // setWomen('')
        //console.log(e.target.value)
    }


    return (
        <header className={S.headerContainer}>
            <Link to='/sneakers' onClick={e => handleAllSneakers(e)} className={S.links} >
                <div className={S.headerLogo}>
                    <img src={logo} width="250rem" alt='Hsneaker' />
                </div>
            </Link>
            <select name="" id="" defaultValue='Women' className={S.select} onChange={handlerFilterWomen()}>
                <option value='Women'> Women</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select>
            <select name="" id="" defaultValue='men' className={S.select} onChange={handlerFilterMen()}>
                <option value='men'> Men</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select>
            <select name="" id="" defaultValue='Kids' className={S.select} onChange={handlerFilterKids()}>
                <option value='Kids'> Kids</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select>
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
                <Link to='/account' className={S.cart}><HiOutlineUser /></Link>
            </div>
            <div className={S.divCart}>
                {!cart.length ? null : <span style={{ color: "red" }}>{totalCart}</span>}
                <Link to='/shop' className={S.cart}><CgShoppingCart /></Link>
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
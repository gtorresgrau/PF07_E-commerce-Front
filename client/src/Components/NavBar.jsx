import React from 'react';
//import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import S from './Styles/NavBar.module.css'
import { useDispatch } from 'react-redux';
import { getAllSneackers } from '../Actions/Actions';
import logo from '../Images/logo2.png';
import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';

import  { useAuth0 } from "@auth0/auth0-react"

export default function Navbar({ setCurrentPage, currentPage }) {
    const dispatch = useDispatch();
    const { loginWithRedirect}= useAuth0();
    const { logout}= useAuth0();

    const handleAllSneakers = (e) => {
        e.preventDefault();
        dispatch(getAllSneackers());
        setCurrentPage(1);
    }

    //function handlerFilterMen(e) {
        // dispatch(getFilter(e.target.value))
        // setCurrentPage(1);
        // setWomen('')
        // // setkids('')
        // console.log(e.target.value)
   // }
    //function handlerFilterWomen(e) {
        // dispatch(getFilter(e.target.value))
        // setCurrentPage(1);
        // setMen('')
        // // setkids('')
        // console.log(e.target.value)
    //}
    //function handlerFilterKids(e) {
        //e.preventDefault()
        // dispatch(getFilter(e.target.value))
        // setCurrentPage(1);
        // setMen('')
        // setWomen('')
        //console.log(e.target.value)
    //}


    return (
        <div>
        <nav className={S.display}>
            <div className={S.displayLeft}>
                <Link to='/sneakers' onClick={e => handleAllSneakers(e)}>
                    <img className={S.logo} src={logo} width="250rem" alt='Hsneaker'/>
                </Link>
                <Link className={S.links} to='#'>MEN</Link>
                <Link className={S.links} to='#'>WOMEN</Link>
                <Link className={S.links} to='#'>KIDS</Link>
            </div>

            {/* <div>
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
            </div> */}

            <div className={S.displayRight}>
                <div className={S.SearchBar}>
                    <SearchBar currentPage={currentPage}
                        setCurrentPage={setCurrentPage} />
                    <div className={S.displayLinks}>
                        <div className="">
                            <Link to='/account'className={S.heart}><FaRegHeart /></Link>
                        </div>
                        <div className="">
                            <Link to='/account'className={S.user}><HiOutlineUser/></Link>
                        </div>
                        <div className={S.divCart}>
                            <Link to='/shop' className={S.cart}><CgShoppingCart/></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
            <div className="">
                <Link to='/blog'><button className={S.btn} >Blog</button></Link>
            </div>      
            <div className="">
                <Link to='/aboutUs'><button className={S.btn} >About us</button></Link>
            </div> */}
            {/* <div className="">
                <Link to='/singIn'><button className={S.singInButton} >Sing in</button></Link>
            </div>
            <div className="">
                <Link to='/join'><button className={S.joinNowButton} >Join Now</button></Link>
            </div> */}
        

            {/* <div className="">
                <Link to='/account'className={S.cart}><HiOutlineUser/></Link>
            </div>
            <div className={S.divCart}>
                <Link to='/shop' className={S.cart}><CgShoppingCart/></Link>
            </div>
            <div className="">
                <button  className={S.singInButton} onClick={()=>loginWithRedirect()} >Sing in / Sing Up</button>
            </div>
            <div className="">
                <button  className={S.singInButton} onClick={()=>logout({returnTo:'http://localhost:3000/sneakers'})} > Logout</button>
            </div>
            <div className="S.btn">
                <Link to='/addSneaker'><button className={S.singInButton}>New Sneaker</button></Link>
            </div> */}
        </nav>   
    </div>
    )
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../Images/logo2.png';
import SearchBar from './SearchBar';
import S from './Styles/NavBar.module.css'
import { getAllSneackers } from '../Actions/Actions';
import { CgShoppingCart } from 'react-icons/cg';
import { FaRegHeart } from 'react-icons/fa';
import { LoginButton } from './Loginbutton.jsx';
import { LogoutButton } from './Logoutbutton.jsx';
import { UserLogin } from './UserLogin.jsx';
import { useAuth0 } from "@auth0/auth0-react"

export default function Navbar({ setCurrentPage, currentPage }) {
    const dispatch = useDispatch();
    const {isAuthenticated /*, getAccessTokenSilently*/} = useAuth0();

    const cart = useSelector(state => state.cart)

    var totalCart = 0
    for (let i = 0; i < cart.length; i++) {
        totalCart += cart[i].quantify
    }

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
        <nav className={S.display}>
            <div className={S.displayLeft}>
            <Link to='/sneakers' onClick={e => handleAllSneakers(e)}>
                <img className={S.logo} src={logo} width="250rem" alt='Hsneaker'/>
            </Link>
                    <Link className={S.links} to='#'>MEN</Link>
                    <Link className={S.links} to='#'>WOMEN</Link>
                    <Link className={S.links} to='#'>KIDS</Link>
            </div>
            <div className={S.displayRight}>
                <div className={S.SearchBar}>
                    <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
                <div className={S.displayLinks}>
                    <div className="">
                        <Link to='/account' className={S.heart}><FaRegHeart /></Link>
                    </div>
                    {!isAuthenticated ? <LoginButton/>: <> <LogoutButton/>  <UserLogin/> </>}
                    <div className={S.divCart}>
                        {!cart.length ? null : <span style={{ color: "red" }}>{totalCart}</span>}
                        <Link to='/shop' className={S.cart}><CgShoppingCart /></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};
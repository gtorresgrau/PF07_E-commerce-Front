import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import SerchBar from './SerchBar';

import S from './Styles/NavBar.module.css'

export default function Navbar({setCurrenPage}) {
    
    const [woman, setWoman] = useState('')
    const [men, setMen] = useState('')
    const icon = " PF07_E-commerce-Front/client/public/263142.png";
    return (
        <header className={S.headerContainer}>
            <p className={S.headerLogo} >Henry Sneakers</p>

            <select name="" id="" value={woman} className={S.filter} onChange={e=>handleSort(e)}>
                <option hidden> Woman</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select>
            <select name="" id="" value={men} className={S.filter} onChange={e=>handleSort(e)}>
                <option hidden> Men</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select> 
           
            <SerchBar 
            setCurrenPage={setCurrenPage}
            />

            <Link to='/blog'><button className={S.headerSecondaryButton} >Blog</button></Link>

            <Link to='/aboutUs'><button className={S.headerSecondaryButton} >About us</button></Link>

            <Link to='/account'><button className={S.headerSecondaryButton} >Account</button></Link>

            <Link to='/singIn'><button className={S.singInButton} >Sing in</button></Link>

            <Link to='/join'><button className={S.joinNowButton} >Join Now</button></Link>

            <Link to='/shop'><a href={icon }></a></Link>

            



           
        </header>
    )
};


import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SerchBar';

export default function Navbar({setCurrenPage}) {
    
    


    return (
        <header className={styles.headerContainer}>
            <p className={styles.headerLogo} >Henry Shoes</p>

            <select name="" id="" value={Woman} className={styles.filter} onChange={e=>handleSort(e)}>
                <option hidden> Woman</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select>
            <select name="" id="" value={Men} className={styles.filter} onChange={e=>handleSort(e)}>
                <option hidden> Men</option>
                <option value='sport'>Sport</option>
                <option value='running'>Running</option>
                <option value='training'>Training</option>
            </select> 
            <Link to='/blog'><button className={styles.headerSecondaryButton} >Blog</button></Link>

            <Link to='/aboutUs'><button className={styles.headerSecondaryButton} >About us</button></Link>

            <Link to='/account'><button className={styles.headerSecondaryButton} >Account</button></Link>

            <SearchBar 
            setCurrentPage={setCurrentPage}
            />
        </header>
    )
};


import React from 'react';
import {NavLink} from 'react-router-dom';
import S from './Styles/Landing.module.css';
import pedro from '../Images/Pedro.jpeg'
import ariel from '../Images/Ariel.jpeg'
import matias from '../Images/Matias.jpeg'
import hendri from '../Images/Hendri.jpeg'
import ezequiel from '../Images/Ezequiel.jfif'
import carlos from '../Images/Carlos.jpg'
import gonzalo from '../Images/Gonzalo.jpeg'

export default function Landing() {
    return (
        <>
            <div className={S.landing}>
                <div className={S.welcome}>
                    <h1>WELCOME TO OUR FINAL PROJECT FOR HENRY</h1>
                    <p>Henry's Sneakers is your new favorite ecommerce to do your shopping</p>
                </div>
                <div className={S.btn}>
                    <NavLink to='/sneakers'>
                        <label htmlFor="home"><button className={S.start} ><h3>HENRY´S SNEAKERS</h3></button></label>
                    </NavLink>
                </div>
                <div className={S.us}>
                    <h2>OUR TEAM</h2> 
                    <ul className={S.team}>
                        <a href="https://github.com/Arux26" target="_blank" rel="noreferrer"><li className={S.nos}><img src={ariel} alt="1" className={S.user}/>Ariel Trangoni</li></a>
                        <a href="https://github.com/CarlosRomeroA" target="_blank" rel="noreferrer"><li className={S.nos}><img src={carlos} alt="2" className={S.user}/>Carlos Romero</li></a>
                        <a href="https://github.com/hnavas" target="_blank" rel="noreferrer"><li className={S.nos}><img src={hendri} alt="3" className={S.user}/>Hendri Navas</li></a>
                        <a href="https://github.com/matirozas" target="_blank" rel="noreferrer"><li className={S.nos}><img src={matias} alt="4" className={S.user}/>Matias Rozas</li></a>
                        <a href="https://github.com/Pedrox20" target="_blank" rel="noreferrer"><li className={S.nos}><img src={pedro} alt="5" className={S.user}/>Pedro Morán</li></a>
                        <a href="https://github.com/ezeoli" target="_blank" rel="noreferrer"><li className={S.nos}><img src={ezequiel} alt="6" className={S.user}/>Ezequiel Olier</li></a>
                        <a href="https://github.com/gtorresgrau" target="_blank" rel="noreferrer"><li className={S.nos}><img src={gonzalo} alt="7" className={S.user}/>Gonzalo Torres Grau</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
};
import React from 'react';
import {NavLink} from 'react-router-dom';
import S from './Styles/Landing.module.css';
import user from '../Images/usuario.png';

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
                        <a href="https://github.com/Arux26" target="_blank" rel="noreferrer"><li className={S.nos}><img src={user} alt="1" />Ariel Trangoni</li></a>
                        <a href="https://github.com/CarlosRomeroA" target="_blank" rel="noreferrer"><li className={S.nos}><img src={user} alt="2" />Carlos Romero</li></a>
                        <a href="https://github.com/hnavas" target="_blank" rel="noreferrer"><li className={S.nos}><img src={user} alt="3" />Hendri Navas</li></a>
                        <a href="https://github.com/matirozas" target="_blank" rel="noreferrer"><li className={S.nos}><img src={user} alt="4" />Matias Rozas</li></a>
                        <a href="https://github.com/Pedrox20" target="_blank" rel="noreferrer"><li className={S.nos}><img src={user} alt="5" />Pedro Morán</li></a>
                        <a href="https://github.com/ezeoli" target="_blank" rel="noreferrer"><li className={S.nos}><img src={user} alt="6" />Ezequiel Olier</li></a>
                        <a href="https://github.com/gtorresgrau" target="_blank" rel="noreferrer"><li className={S.nos}><img src={user} alt="7" />Gonzalo Torres Grau</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
};
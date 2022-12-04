import React from 'react';
import {Link} from 'react-router-dom';
import S from './Styles/Landing.module.css';
import user from './img/usuario.png';

export default function Landing() {
    return (
        <>
            <div className={S.landing}>
                <div className={S.welcome}>
                    <h1>WELCOME TO OUR FINAL PROJECT FOR HENRY</h1>
                    <p>Henry's Sneakers is your new favorite ecommerce to do your shopping</p>
                </div>
                <div className={S.btn}>
                    <Link to='/sneackers'>
                        <label htmlFor="home"><button className={S.start} ><h3>HENRY´S SNEAKERS</h3></button></label>
                    </Link>
                </div>
                <div className={S.us}>
                    <h2>OUR TEAM</h2> 
                    <ul className={S.team}>
                        <a href="https://github.com/Arux26"><li className={S.nos}><img src={user} alt="1" />Ariel Trangoni</li></a>
                        <a href="https://github.com/CarlosRomeroA"><li className={S.nos}><img src={user} alt="2" />Carlos Romero</li></a>
                        <a href="https://github.com/hnavas"><li className={S.nos}><img src={user} alt="3" />Hendri Navas</li></a>
                        <a href="https://github.com/matirozas"><li className={S.nos}><img src={user} alt="4" />Matias Rozas</li></a>
                        <a href="https://github.com/Pedrox20"><li className={S.nos}><img src={user} alt="5" />Pedro Morán</li></a>
                        <a href="https://github.com/ezeoli"><li className={S.nos}><img src={user} alt="6" />Ezequiel Olier</li></a>
                        <a href="https://github.com/gtorresgrau"><li className={S.nos}><img src={user} alt="7" />Gonzalo Torres Grau</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
};
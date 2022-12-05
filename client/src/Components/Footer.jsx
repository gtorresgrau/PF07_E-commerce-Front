import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import s from './Styles/Footer.module.css'


function Footer() {
  return (
    <footer className={s.foot}>
      <div><span className={s.spanF}>2022 Envoy. All right reserved</span></div>
      <Link to='/about' className={s.links}>About</Link>
      <div className={s.foot}>
        <label>Team: </label>
        <a href="https://github.com/Arux26" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Ariel Trangoni</ul></a>
        <a href="https://github.com/CarlosRomeroA" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Carlos Romero</ul></a>
        <a href="https://github.com/hnavas" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Hendri Navas</ul></a>
        <a href="https://github.com/matirozas" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Matias Rozas</ul></a>
        <a href="https://github.com/Pedrox20" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Pedro Morán</ul></a>
        <a href="https://github.com/ezeoli" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Ezequiel Olier</ul></a>
        <a href="https://github.com/gtorresgrau" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Gonzalo Torres Grau</ul></a>
      </div>
    </footer>
  )
}

export default Footer;
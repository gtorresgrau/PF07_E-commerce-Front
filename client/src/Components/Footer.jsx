import React from 'react'
import { BsGithub } from 'react-icons/bs';
//import { Link } from 'react-router-dom';
import s from './Styles/Footer.module.css'


function Footer() {
  return (
    <footer>
      {/* <Link to='/about' className={s.links}>About</Link> */}
      <div className={s.foot}>
      <span className={s.spanF}>2022 Envoy. All right reserved</span>
        <label className={s.spanF}>Team:</label>
        <a href="https://github.com/Arux26" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><BsGithub />Ariel Trangoni</ul></a>
        <a href="https://github.com/CarlosRomeroA" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><BsGithub />Carlos Romero</ul></a>
        <a href="https://github.com/hnavas" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><BsGithub />Hendri Navas</ul></a>
        <a href="https://github.com/matirozas" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><BsGithub />Matias Rozas</ul></a>
        <a href="https://github.com/Pedrox20" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><BsGithub />Pedro Morán</ul></a>
        <a href="https://github.com/ezeoli" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><BsGithub />Ezequiel Olier</ul></a>
        <a href="https://github.com/gtorresgrau" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><BsGithub />Gonzalo Torres Grau</ul></a>
      </div>
    </footer>
  )
}

export default Footer;
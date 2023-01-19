import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import s from './Styles/Footer.module.css'


function Footer() {
  return (
    <footer>
      <div className={s.foot}>
      <span className={s.spanF}>2022 Envoy. All right reserved</span>
        <label className={s.spanF}>Team:</label>
        <a href="https://www.linkedin.com/in/ariel-trangoni-web-developer/" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Ariel Trangoni</ul></a>
        <a href="https://www.linkedin.com/in/carlos-inti-romero-aguirre-541a98191/" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Carlos Romero</ul></a>
        <a href="https://www.linkedin.com/in/hendrinavas" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Hendri Navas</ul></a>
        <a href="https://www.linkedin.com/in/matias-rozas-395481224/" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Matias Rozas</ul></a>
        <a href="https://www.linkedin.com/in/pedro-mor%C3%A1n-9719b5218" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Pedro Morán</ul></a>
        <a href="https://www.linkedin.com/in/ezequiel-olier-814767a7/" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Ezequiel Olier</ul></a>
        <a href="https://www.linkedin.com/in/gonzalotorresgrau/" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin />Gonzalo Torres Grau</ul></a>
      </div>
    </footer>
  )
}

export default Footer;
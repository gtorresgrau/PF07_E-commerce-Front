import React from 'react'
import s from './Styles/Loading.module.css'


export default function Loading() {
  return (
    <div className={s.center}>
      <div className={s.loading}></div>
      <h2>Loading...</h2>
    </div>
  )
};
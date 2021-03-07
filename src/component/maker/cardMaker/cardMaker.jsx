import React from 'react'
import style from '../cardMaker/cardMaker.module.css'
import CardTable from './cardTable/cardTable'
const CardMaker = () => {
  return (
    <section className={style.cardmaker} >
      <h1 className ={style.title}>Card Maker</h1>
    </section>
  )
}

export default CardMaker

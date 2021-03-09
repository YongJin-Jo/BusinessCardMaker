import React from 'react'
import style from '../cardMaker/cardMaker.module.css'
import AddForm from './addform/addform'
import CardTable from './cardTable/cardTable'
const CardMaker = ({cards,addCard}) => {
  return (
    <section className={style.cardmaker} >
      <h1 className ={style.title}>Card Maker</h1>
      <ul>
      {
        cards.map(card => {
          return <CardTable key={cards.id} card={card}/>
        }) 
      }
      <AddForm  addCard={addCard} />
      </ul>
      
    </section>
  )
}

export default CardMaker

import React from 'react'
import style from '../cardMaker/cardMaker.module.css'
import AddForm from './addform/addform'
import CardTable from './cardTable/cardTable'
const CardMaker = ({cards,createOrUpdateCard,deleteCard}) => {
  return (
    <section className={style.cardmaker} >
      <h1 className ={style.title}>Card Maker</h1>
      <ul>
      {
        Object.keys(cards).map(key => {
          return <CardTable 
          key={key} card={cards[key]} 
          createOrUpdateCard={createOrUpdateCard} 
          deleteCard={deleteCard}
          />
        }) 
      }
      <AddForm  createOrUpdateCard={createOrUpdateCard} />
      </ul>
      
    </section>
  )
}

export default CardMaker

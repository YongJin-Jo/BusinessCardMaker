import React from 'react'
import style from '../cardMaker/cardMaker.module.css'
import AddForm from './addform/addform'
import CardTable from './cardTable/cardTable'
const CardMaker = ({FileInput,cards,createOrUpdateCard,deleteCard}) => {
  return (
    <section className={style.cardmaker} >
      <h1 className ={style.title}>Card Maker</h1>
      <ul>
      {
        Object.keys(cards).map(key => {
          return <CardTable 
          FileInput={FileInput}
          key={key} 
          card={cards[key]} 
          createOrUpdateCard={createOrUpdateCard} 
          deleteCard={deleteCard}
          
          />
        }) 
      }
      <AddForm  
        createOrUpdateCard={createOrUpdateCard}
        FileInput={FileInput}
        />
      </ul>
      
    </section>
  )
}

export default CardMaker

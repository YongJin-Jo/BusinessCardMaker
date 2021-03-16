import React from 'react'
import styles from '../cardMaker/cardMaker.module.css'
import AddForm from './addform/addform'
import CardTable from './cardTable/cardTable'

const CardMaker = ({FileInput,cards,createOrUpdateCard,deleteCard}) => {
  
  return (
    <section className={styles.cardmaker} >
          <h1 className ={styles.title}>Card Maker</h1>
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
      FileInput={FileInput} 
      createOrUpdateCard={createOrUpdateCard}
      />
      </ul>
      
    </section>
  )
}

export default CardMaker

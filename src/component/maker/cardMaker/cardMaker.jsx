import React from 'react'
import styles from '../cardMaker/cardMaker.module.css'
import AddForm from './addform/addform'
import CardTable from './cardTable/cardTable'
const CardMaker = ({FileInput,cards,createOrUpdateCard,deleteCard}) => {
  
  const onClick = (event) =>{
    event.preventDefault()
    const card = {
      id:Date.now(),
      name:  '',
      company:  '',
      theme:  '',
      title:  '',
      email:  '',
      message:  '',
      fileName: '',
      fileURL: ''
    }
    createOrUpdateCard(card)
  }
  return (
    <section className={styles.cardmaker} >
      <div className={styles.contain}>
          <h1 className ={styles.title}>Card Maker</h1>
          <button className={styles.button} onClick={onClick}>
            <img src="./images/icons8-plus-24.png" alt=""/>
          </button>
      </div>
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

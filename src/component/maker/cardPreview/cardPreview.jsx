import React from 'react'
import style from '../cardPreview/cardPreview.module.css'
import Card from './card/card'
const CardPreview = ({cards}) => {
  return (
    <section className={style.cardPreview}>
      <h1 className={style.title}>Card Preview</h1>
      <ul className={style.cards}>
        {
          Object.keys(cards).map(key => {
            return <Card key={key} card ={cards[key]}/>
          })
        }
      </ul>
     
    </section>
  )
}

export default CardPreview 

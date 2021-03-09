import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import CardMaker from './cardMaker/cardMaker'
import CardPreview from './cardPreview/cardPreview'
import style from './maker.module.css'
const Maker = ({authService}) => {

  const [cards,setcards] =useState([
    {
      id:'1',
      name:'JongJin-Jo',
      company:'sam',
      theme:'dark',
      title: 'Software Engineer',
      email:'artinc5233@gmail.com',
      message:'good',
      fileName:'jongjin',
      fileURL: null

    },
    {
      id:'2',
      name:'JongJin-Jo2',
      company:'sam1',
      theme:'light',
      title: 'Software Engineer',
      email:'artinc5233@gmail.com',
      message:'good',
      fileName:'jongjin',
      fileURL:''

    },
    {
      id:'3',
      name:'JongJin-Jo3',
      company:'sam2',
      theme:'colorful',
      title: 'Software Engineer',
      email:'artinc5233@gmail.com',
      message:'good',
      fileName:'jongjin',
      fileURL:null

    }
  ])

  const history = useHistory();

  const onLogout = () =>{
    authService.logout();
  }

  useEffect(() =>{
    authService.onAuthChange(user =>{
      if(!user){
        history.push('/')
      }
    })
  })

  const addCard = (data) => {
    const update =[...cards, data]
    setcards(update)
  }
  
  return (
    <section className={style.maker}>
      <Header onLogout ={onLogout}/>
      <div className ={style.container}>
        <CardMaker cards ={cards} addCard ={addCard}/>
        <CardPreview cards ={cards}/>
      </div>
      <Footer/>
    </section>
  )
}

export default Maker

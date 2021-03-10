import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import CardMaker from './cardMaker/cardMaker'
import CardPreview from './cardPreview/cardPreview'
import style from './maker.module.css'
const Maker = ({authService}) => {

  const [cards,setcards] =useState({
    '1': {
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

    '2':{
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
    '3': {
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
  })

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



  const createOrUpdateCard = (data) =>{
    const updated = {...cards};
    updated[data.id]=data;
    setcards( updated);
  }

  const deleteCard = (data) =>{
    const updated = {...cards};
    delete updated[data.id];
    setcards(updated);
  }


  return (
    <section className={style.maker}>
      <Header onLogout ={onLogout}/>
      <div className ={style.container}>
        <CardMaker 
        cards ={cards} 
        createOrUpdateCard ={createOrUpdateCard}
        deleteCard ={deleteCard}
        />
        <CardPreview cards ={cards}/>
      </div>
      <Footer/>
    </section>
  )
}

export default Maker

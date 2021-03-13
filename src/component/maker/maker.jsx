import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import CardMaker from './cardMaker/cardMaker'
import CardPreview from './cardPreview/cardPreview'
import style from './maker.module.css'
const Maker = ({FileInput,authService, cardRepository}) => {
  
  const history = useHistory();
  const historyState=history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  const [cards,setcards] =useState({});


  const onLogout = () =>{
    authService.logout();
  }

  useEffect(() =>{
    authService.onAuthChange(user =>{
      if(user){
        setUserId(user.uid)
      }else{ 
        history.push('/')
      }
    })
  })



  const createOrUpdateCard = (data) =>{
    const updated = {...cards};
    updated[data.id]=data;
    setcards( updated);
    cardRepository.saveCard(userId, data)
    
  }

  const deleteCard = (data) =>{
    const updated = {...cards};
    delete updated[data.id];
    setcards(updated);
    cardRepository.removeCard(userId, data)
  }


  return (
    <section className={style.maker}>
      <Header onLogout ={onLogout}/>
      <div className ={style.container}>
        <CardMaker 
        FileInput={FileInput}
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

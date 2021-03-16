import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import CardMaker from './cardMaker/cardMaker'
import CardPreview from './cardPreview/cardPreview'
import style from './maker.module.css'
const Maker = ({FileInput,authService, cardRepository}) => {
  
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, userId, history]);

  const createOrUpdateCard = card => {
   
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };


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

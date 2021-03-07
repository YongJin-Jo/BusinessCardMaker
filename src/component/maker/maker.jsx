import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import CardMaker from './cardMaker/cardMaker'
import CardPreview from './cardPreview/cardPreview'
import style from './maker.module.css'
const Maker = ({authService}) => {

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

  
  return (
    <section className={style.maker}>
      <Header onLogout ={onLogout}/>
      <div className ={style.container}>
        <CardMaker/>
        <CardPreview/>
      </div>
      <Footer/>
    </section>
  )
}

export default Maker

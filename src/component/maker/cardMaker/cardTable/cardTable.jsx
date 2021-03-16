import React, { memo, useRef } from 'react'
import styles from '../cardTable/cardTable.module.css'
import Button from './button/button';
const CardTable = memo(({FileInput,card,createOrUpdateCard,deleteCard}) => {

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, theme, fileName } = card;

  const onFileChange =(file) =>{
    createOrUpdateCard({
      ...card,
      fileName:file.name,
      fileURL:file.url
    })
  }

  const onChange = (event) =>{
    if(event.currentTarget == null ){
      return
    }else if(event.currentTarget.name === undefined){
      return
    }
    event.preventDefault();
    createOrUpdateCard({
      ...card,
      
      [event.currentTarget.name]:event.currentTarget.value,
    });

  }  
  const onSubmit = (event) =>{
    event.preventDefault();
    deleteCard(card)
  }
  
  return (
    <>
   <form className={styles.form}>
     <input 
     className={styles.input} 
     type="text" 
     name='name' 
     ref={nameRef}
     value={name}
     placeholder='Name'
     onChange={onChange}
     />
     <input 
     className={styles.input} 
     type="text" 
     name='company' 
     ref={companyRef}
     value={company}
     placeholder='Company'
     onChange={onChange}
     />
     <select 
     className={styles.select} 
     name="theme" 
     ref={themeRef}
     value={theme}
     placeholder='Theme'
     onChange={onChange}
     >
       <option value="light">Light</option>
       <option value="dark">Dark</option>
       <option value="colorful">Colorful</option>
     </select>
     <input 
     className={styles.input} 
     type="text" 
     name='title' 
     ref={titleRef}
     value={title}
     placeholder='Title'
     onChange={onChange}
     />
     <input className={styles.input} 
     type="text" 
     name='email' 
     ref={emailRef}
     value={email}
     placeholder='Email'
     onChange={onChange}
     />
    <textarea 
    className={styles.textarea} 
    name="message" 
    ref={messageRef}
    value={message}
    placeholder='Message'
    onChange={onChange}
    ></textarea>
    <div 
    className={styles.fileInput}
    onChange={onChange}
    >
    <FileInput name={fileName} onFileChange={onFileChange}/>
    </div>
    <Button 
    name="Delete" 
    onClick={onSubmit} 
    />
   </form>
   
   </>
   
  )
})

export default CardTable


import React from 'react'
import styles from '../cardTable/cardTable.module.css'
import Button from './button/button';
const CardTable = ({FileInput,card,createOrUpdateCard,deleteCard}) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL
  } = card;

  const onFileChange =(file) =>{
    createOrUpdateCard({
      ...card,
      fileName:file.name,
      fileURL:file.url
    })
  }

  const onChange = (event) =>{
    if(event.currentTarget == null){
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
     value={name}
     onChange={onChange}
     />
     <input 
     className={styles.input} 
     type="text" 
     name='company' 
     value={company}
     onChange={onChange}
     />
     <select 
     className={styles.select} 
     name="theme" 
     value={theme}
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
     value={title}
     onChange={onChange}
     />
     <input className={styles.input} 
     type="text" 
     name='email' 
     value={email}
     onChange={onChange}
     />
    <textarea 
    className={styles.textarea} 
    name="message" 
    value={message}
    onChange={onChange}
    ></textarea>
    <div 
    className={styles.fileInput}
    onChange={onChange}
    >
    <FileInput name={name} onFileChange={onFileChange}/>
    </div>
    <Button 
    name="Delete" 
    onClick={onSubmit} 
    />
   </form>
   <br/>
   </>
   
  )
}

export default CardTable


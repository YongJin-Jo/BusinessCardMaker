import React from 'react'
import ImageFileInput from '../../../image_file_input/image_file_input';
import styles from '../cardTable/cardTable.module.css'
import Button from './button/button';
const CardTable = ({card,key}) => {
  const {name,company,theme,title,email,message,fileName,fileURL} = card;

  const onsubmit = () =>{

  }
  return (
   <form className={styles.form}>
     <input className={styles.input} type="text" name='name' value={name}/>
     <input className={styles.input} type="text" name='company' value={company}/>
     <select className={styles.select} name="theme" value={theme}>
       <option value="light">Light</option>
       <option value="dark">Dark</option>
       <option value="colorful">Colorful</option>
     </select>
     <input className={styles.input} type="text" name='title' value={title}/>
     <input className={styles.input} type="text" name='email' value={email}/>
    <textarea className={styles.textarea} name="message" value={message}></textarea>
    <div className={styles.fileInput}>
      <ImageFileInput/>
    </div>
    <Button name="Delete" onClick={onsubmit} />
   </form>
  )
}

export default CardTable


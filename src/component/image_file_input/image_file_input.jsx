import React, { memo, useRef, useState } from 'react'
import styles from '../image_file_input/image_file_input.module.css'
const ImageFileInput = memo(({imageUploader,name, onFileChange}) => {

  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
     <div className={styles.container}>
       <input 
       ref={inputRef}
       className={styles.input} 
       type="file" 
       accept="image/*"
       onChange={onChange}
       />
       {!loading &&
        <button className={`${styles.button} ${name? styles.pink : styles.grey}`} onClick={onButtonClick}>
          <h1>{name || 'No File'}</h1>
        </button>}
        {loading && <div className={styles.loading}>
        
        </div>}
     </div>
  )
})
export default ImageFileInput

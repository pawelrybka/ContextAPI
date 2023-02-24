import React from 'react'
import styles from './AddPointModal.module.css'
import TodosContext from '../Context/Context';
import { useState, useContext, ChangeEvent } from 'react';

type props = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({ visible, setVisible }: props) => {
  
  const handleClose = () => setVisible(!visible)

  const [inputValue, setInputValue] = useState("");
  
  const { addTodo } = useContext(TodosContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(inputValue === '') return;
    addTodo(inputValue);
    setInputValue("");
    handleClose()
  };

  return (
    <div className={`${styles.addpointmodal} ${visible ? styles.visible : ''}`}>
      <div className={styles.buttons}>
        <button onClick={handleClose}>X</button>
      </div>
      <form>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
      </form>
    </div>
  )
}

export default AddPointModal


import React from 'react'
import styles from './AddPointModal.module.css'
import TodosContext from '../Context/Context';
import { useState, useContext, ChangeEvent } from 'react';
import { motion } from "framer-motion"

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
    <motion.div 
      className={styles.addpointmodal}
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
    >
      <div className={styles.buttons}>
        <button onClick={handleClose}>X</button>
      </div>
      <form>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
      </form>
    </motion.div>
  )
}

export default AddPointModal


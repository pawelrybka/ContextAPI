import React from 'react'
import styles from './AddPointModal.module.css'
import TodosContext from '../Context/Context';
import { useState, useContext, ChangeEvent } from 'react';

const AddPointModal = () => {
  
  const [inputValue, setInputValue] = useState("");
  
  const { addTodo } = useContext(TodosContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.addpointmodal}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default AddPointModal


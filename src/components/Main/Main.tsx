import React from 'react'
import styles from './Main.module.css'
import Context from '../Context/Context'
import { useContext, useState } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'
import { AnimatePresence } from "framer-motion";
import Backdrop from '../Backdrop/Backdrop'


const Main = () => {
  
  const { todos } = useContext(Context);
  
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleClick = (todoId: number) => {
    setSelectedItemId(todoId);
  }
 
  const handleDisable = () => {
    setSelectedItemId(null)
  }

  return (
    <div className={styles.main}>
      {todos.map((todo) => (
        <button key={todo.id} className={styles.point} onClick={() => handleClick(todo.id)}>
          {todo.text}
        </button>
      ))}
      <AnimatePresence>
        {selectedItemId && (
          <PointConfiguration 
            handleDisable={handleDisable}
            todo={todos.find(todo => todo.id === selectedItemId)}
          />
        )}
      </AnimatePresence>  
    </div>  
  )
}

export default Main




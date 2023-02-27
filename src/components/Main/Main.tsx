import React from 'react'
import styles from './Main.module.css'
import Context from '../Context/Context'
import { useContext, useState } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'
import { AnimatePresence, motion } from "framer-motion";

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
        <motion.div 
          key="box"
          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: "50%", opacity: 0 }}
          transition={{duration: 0.2, ease: "easeOut"}}
          className={styles.info}
        >
          <PointConfiguration 
            handleDisable={handleDisable}
            todo={todos.find(todo => todo.id === selectedItemId)}
          />
        </motion.div>
        )}
      </AnimatePresence>  
    </div>  
  )
}

export default Main



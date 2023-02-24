import React from 'react'
import styles from './Main.module.css'
import TodosContext from '../Context/Context'
import { useContext } from 'react'

const Main = () => {
  
  const { todos } = useContext(TodosContext);
  
  return (
    <div className={styles.main}>
      {todos.map((todo) => (
        <button key={todo.id} className={styles.point}>
          {todo.text}
        </button>
      ))}
    </div>  
  )
}

export default Main


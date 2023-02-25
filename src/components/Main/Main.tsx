import React from 'react'
import styles from './Main.module.css'
import TodosContext from '../Context/Context'
import { useContext, useState } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'

const Main = () => {
  const { todos } = useContext(TodosContext);

  const[visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  return (
    <div className={styles.main}>
      {todos.map((todo) => (
        <button key={todo.id} className={styles.point} onClick={handleClick}>
          {todo.text}
          <PointConfiguration visible={visible} setVisible={setVisible}/>
        </button>
      ))}
    </div>  
  )
}

export default Main



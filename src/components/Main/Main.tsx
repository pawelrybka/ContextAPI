import React from 'react'
import styles from './Main.module.css'
import TodosContext from '../Context/Context'
import { useContext, useState } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'

const Main = () => {
  
  const { todos } = useContext(TodosContext);

  const[visible, setVisible] = useState(false)
  
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleClick = (todoId: number) => {
    setSelectedItemId(todoId);
    setVisible(!visible)
  }
 
  console.log(todos)

  return (
    <div className={styles.main}>
      {todos.map((todo) => (
        <button key={todo.id} className={styles.point} onClick={() => handleClick(todo.id)}>
          {todo.text}
        </button>
      ))}
      {selectedItemId && (
        <PointConfiguration 
          visible={visible} 
          setVisible={setVisible}
          todo={todos.find((todo) => todo.id === selectedItemId)!}
        />
      )}
    </div>  
  )
}

export default Main



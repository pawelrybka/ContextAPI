import React from 'react'
import styles from './Main.module.css'
import TodosContext from '../Context/Context'


const Main = () => {
  
  const { todos, removeTodo } = React.useContext(TodosContext);

  const handleRemoveTodo = (id: number) => {
    removeTodo(id);
  };
  
  return (
    <div className={styles.main}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>  
    
  )
}

export default Main


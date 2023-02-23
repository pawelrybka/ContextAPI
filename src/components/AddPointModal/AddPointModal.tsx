import React from 'react'
import styles from './AddPointModal.module.css'
import { useState, FormEvent, ChangeEvent } from 'react'


type Todo = {
  id: number;
  text: string
}

const AddPointModal = () => {
 
  const[todos, setTodos] = useState<Todo[]>([])

  const[value, setValue] = useState<string>('')
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(value === '') return
    const newTodo: Todo = {
      id:todos.length + 1,
      text: value
    }
    setTodos([...todos, newTodo])
    setValue('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.addpointmodal}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value}
          onChange={handleChange}
        />
        <input 
          type="submit" 
        />
      </form>
      <ul>
       {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
       ))}
      </ul>
    </div>
  )
}

export default AddPointModal


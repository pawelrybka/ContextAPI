import React, { useState } from "react";
import { ListProps, Todo } from "../../assets/types";
import TodosContext from "../Context/Context";
import styles from './MainLayout.module.css'

const TodosProvider = ( {children}: ListProps ) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const addTodo = (text: string) => {
    const newTodo = {
      id: idCounter,
      text: text,
    };
    setTodos([...todos, newTodo]);
    setIdCounter(idCounter + 1);
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className={styles.root}>
      <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
        {children}
      </TodosContext.Provider>
    </div>
   
  );
};

export default TodosProvider;


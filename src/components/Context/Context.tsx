import React from "react";
import { TodosContextType } from "../../assets/types";

const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export default TodosContext;


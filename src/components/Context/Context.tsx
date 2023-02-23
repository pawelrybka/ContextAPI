import { TodosContextType } from "../../assets/types";
import { createContext } from "react";

const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export default TodosContext;


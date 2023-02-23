export interface Todo {
    id: number;
    text: string;
}
  
export interface TodosContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
}

export interface ListProps {
    children: React.ReactNode;
}


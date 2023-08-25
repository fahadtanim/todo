import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Todo {
  id: String;
  status: boolean;
  name: String;
}

interface TodoState {
  todos: Todo[];
}

const todoStore = (set: any) => ({
  todos: [
    { id: 1, status: false, name: "task 1" },
    { id: 2, status: true, name: "task 2" },
    { id: 3, status: false, name: "task 3" },
  ],
  addTodo: (todo: Todo) => {
    set((state: TodoState) => {
      todos: [todo, ...state.todos];
    });
  },
  removeTodo: (todoId: String) => {
    set((state: TodoState) => {
      todos: state.todos.filter((todo) => todo.id !== todoId);
    });
  },
  toggleStatus: (todoId: String) => {
    set((state: TodoState) => {
      todos: state.todos.map((todo) =>
        todo.id !== todoId ? { ...todo, status: !todo.status } : todo
      );
    });
  },
});

const useTodoStore = create(devtools(persist(todoStore, { name: "todos" })));

export default useTodoStore;

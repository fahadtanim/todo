import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Todo {
  id: number;
  status: boolean;
  name: String;
}

interface TodoState {
  todos: Todo[];
  totalTasks: number;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (todoId: number) => void;
}

/* Persistant Local Storage, If I want to store in session storage have to change the value to sessionStorage */
const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      totalTasks: 0,
      addTodo: (todo: Todo) =>
        set({
          todos: [...get().todos, todo],
          totalTasks: get().totalTasks + 1,
        }),
      updateTodo: (newTodo: Todo) =>
        set({
          todos: get().todos.map((todo) => {
            if (todo.id == newTodo.id) {
              return {
                id: todo.id,
                name: newTodo.name,
                status: newTodo.status,
              };
            } else {
              return todo;
            }
          }),
        }),
      removeTodo: (todoId: number) =>
        set({
          todos: get().todos.filter((todo) => todo.id != todoId),
          totalTasks: get().totalTasks - 1,
        }),
    }),
    {
      name: 'todo-storage', // name(Key) of the item in the storage {key: value} (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

// const useTodoStore = create<TodoState>()((set, get) => ({
//   todos: [],
//   count: 0,
//   addTodo: (todo: Todo) =>
//     set({ todos: [...get().todos, todo], count: get().count + 1 }),
// updateTodo: (newTodo: Todo) =>
//         set({
//           todos: get().todos.map((todo) =>
//             todo.id == newTodo.id
//               ? {
//                   id: todo.id,
//                   name: newTodo.name,
//                   status: newTodo.status,
//                 }
//               : todo
//           ),
//         }),
// }));

export default useTodoStore;

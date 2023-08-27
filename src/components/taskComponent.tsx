'use client';

import useTodoStore from '@/lib/todoStore';
import { ListGroup, Checkbox, Button } from 'flowbite-react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { useState } from 'react';
import UpdateTask from './updateTask';
interface Todo {
  id: number;
  status: boolean;
  name: string;
}

interface Iprops {
  item: Todo;
}

export default function Task(props: Iprops) {
  const [todo, setTodo] = useState<Todo>(props.item);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const handleTaskStatus = (event: any) => {
    const newTodo = {
      id: todo.id,
      name: todo.name,
      status: event.target.checked,
    };
    setTodo(newTodo);
    updateTodo(newTodo);
  };

  const handleTaskRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <li className="flex flex-row p-2 justify-between min-w-[200px]">
      <Checkbox
        className="self-center"
        name="task_status"
        checked={todo.status}
        onChange={handleTaskStatus}
      />
      <div className="ml-2 mr-2 self-center">{todo.name}</div>
      <div className="flex flex-row">
        <UpdateTask item={todo}></UpdateTask>
        <Button color="gray" size="xs" onClick={handleTaskRemove}>
          <HiTrash className="mr-3 h-4 w-4" />
        </Button>
      </div>
    </li>
  );
}

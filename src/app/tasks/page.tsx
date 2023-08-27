'use client';

import { Card, ListGroup } from 'flowbite-react';
import useTodoStore from '@/lib/todoStore';
import Task from '@/components/taskComponent';
import { useEffect, useState } from 'react';
import Loading from '@/components/loading';

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export default function TasksPage() {
  const todos = useTodoStore((state) => state.todos);
  const hasMounted = useHasMounted();
  if (!hasMounted) return <Loading></Loading>; //have to use it if I want to use Persistant storage
  return (
    <div className="flex justify-center min-w-full min-h-full">
      <Card className="max-w-sm self-center">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          All Tasks
        </h5>
        <ListGroup>
          {todos.map((todo) => (
            <Task item={todo} key={todo.id}></Task>
          ))}
          {todos.length == 0 ? "There's no task!" : ''}
        </ListGroup>
      </Card>
    </div>
  );
}

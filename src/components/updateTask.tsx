'use client';
import { useState } from 'react';
import { Button, Modal, Label, TextInput, Checkbox } from 'flowbite-react';
import useTodoStore from '@/lib/todoStore';
import { HiPencilAlt } from 'react-icons/hi';

interface Todo {
  id: number;
  status: boolean;
  name: string;
}

interface Iprops {
  item: Todo;
}

export default function UpdateTask({ item }: Iprops) {
  const [todo, setTodo] = useState<Todo>(item);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [taskName, setTaskName] = useState<string>(todo.name);
  const props = { openModal, setOpenModal };
  const handleUpdateTask = () => {
    if (!taskName) return alert('Please enter the task name');
    const updatedTask = {
      id: todo.id,
      name: taskName,
      status: todo.status,
    };
    setTodo(updatedTask);
    console.log(updatedTask);
    updateTodo(updatedTask);
    setTaskName(taskName);
    props.setOpenModal(undefined);
  };

  const handleOnchangeTaskName = (event: any) => {
    setTaskName(event.target.value);
    console.log(taskName);
  };

  return (
    <>
      <Button
        color="gray"
        size="xs"
        onClick={() => props.setOpenModal('dismissible')}
      >
        <HiPencilAlt className="mr-3 h-4 w-4" />
      </Button>
      <Modal
        dismissible
        show={props.openModal === 'dismissible'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>New Task</Modal.Header>
        <Modal.Body>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleUpdateTask}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="update_task_name" value="Task Name" />
              </div>
              <TextInput
                id="update_task_name"
                placeholder="task name"
                required
                type="text"
                value={taskName}
                onChange={handleOnchangeTaskName}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdateTask}>I accept</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

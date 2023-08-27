'use client';
import { useState } from 'react';
import { Button, Modal, Label, TextInput, Checkbox } from 'flowbite-react';
import useTodoStore from '@/lib/todoStore';

export default function CreateTask() {
  const addTask = useTodoStore((state) => state.addTodo);
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [taskName, setTaskName] = useState<string>('');
  const props = { openModal, setOpenModal };
  const handleCreateTask = () => {
    props.setOpenModal(undefined);

    if (!taskName) return alert('Please enter the task name');
    const newTask = {
      id: Math.ceil(Math.random() * 1000000),
      status: false,
      name: taskName,
    };

    console.log(newTask);
    addTask(newTask);
    setTaskName('');
  };

  const handleOnchangeTaskName = (event: any) => {
    setTaskName(event.target.value);
    console.log(taskName);
  };

  return (
    <>
      <Button size="xs" onClick={() => props.setOpenModal('dismissible')}>
        Create Task
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
            onSubmit={handleCreateTask}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="task_name" value="Task Name" />
              </div>
              <TextInput
                id="task_name"
                placeholder="task name"
                required
                type="text"
                onChange={handleOnchangeTaskName}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCreateTask}>I accept</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

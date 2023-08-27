'use client';

import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CreateTask from './createTask';
import Link from 'next/link';
export default function TaskNav() {
  const pathname = usePathname();
  return (
    <Navbar fluid rounded className="sticky container mr-auto ml-auto">
      <Navbar.Brand as={Link} href="/tasks">
        <Image
          alt="vercel Logo"
          className="mr-3 h-6 sm:h-9"
          src="/vercel.svg"
          width={110}
          height={65}
          quality={75}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Todo
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button size="xs">Create Task</Button> */}
        <CreateTask></CreateTask>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} active={pathname === '/tasks'} href="tasks">
          Tasks
        </Navbar.Link>
        <Navbar.Link as={Link} active={pathname === '/todo'} href="todo">
          To do
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          active={pathname === '/completed'}
          href="completed"
        >
          Completed
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function TaskNav() {
  const pathname = usePathname();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <Image
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/vercel.svg"
          width={110}
          height={60}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button size="xs">Create Task</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={pathname === "/tasks"} href="tasks">
          Tasks
        </Navbar.Link>
        <Navbar.Link active={pathname === "/todo"} href="todo">
          To do
        </Navbar.Link>
        <Navbar.Link active={pathname === "/completed"} href="completed">
          Completed
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

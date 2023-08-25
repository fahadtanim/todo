"use client";
import TaskNav from "@/components/taskNav";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TaskNav></TaskNav>
      <main>{children}</main>
    </>
  );
}

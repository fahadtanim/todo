"use client";
import TaskNav from "@/components/taskNav";

export default function TodoLayout({
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

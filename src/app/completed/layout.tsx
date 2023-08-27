'use client';
import TaskNav from '@/components/taskNav';

export default function CompletedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TaskNav></TaskNav>
      <main className="min-h-[500px] h-0 max-h-auto">{children}</main>
    </>
  );
}

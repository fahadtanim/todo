import TaskNav from "@/components/taskNav";

export default function CompletedLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <TaskNav></TaskNav>
      <main>{children}</main>
    </>
  );
}

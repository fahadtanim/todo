import { redirect } from 'next/navigation';
import Image from 'next/image';
import { RedirectType } from 'next/dist/client/components/redirect';

export default function Home() {
  redirect('tasks', RedirectType.push);
  return (
    <>
      <div>Home page</div>
    </>
  );
}

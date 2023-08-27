'use client';

import { Spinner } from 'flowbite-react';

export default function Loading() {
  return (
    <div className="flex justify-center min-h-[500px]">
      <Spinner
        className="self-center"
        aria-label="Extra large spinner example"
        size="xl"
      />
    </div>
  );
}

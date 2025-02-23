// app/not-found.tsx
"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="relative bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg text-center max-w-md mx-4">
        <h1 className="text-8xl font-extrabold text-white">404</h1>
        <p className="mt-4 text-3xl text-white">Page Not Found</p>
        <p className="mt-2 text-white">
          Oops! It looks like the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded hover:bg-purple-300 transition"
          >
            Go Home
          </Link>
        </div>

        <div
          className=" absolute right-0 bottom-0 border-t-8 border-t-blue-500 border-l-8 border-l-blue-500 rounded-tl-xl bg-blue-500
            after:absolute after:right-0 after:top-[-20px] after:bg-transparent after:text-blue-500 
            after:w-[12px] after:h-[12px] 
            after:rounded-br-xl after:shadow-[3px_3px_0px_0px_currentColor]
            before:absolute before:bottom-0 before:left-[-20px] before:bg-transparent before:text-blue-500
            before:w-[12px] before:h-[12px]
            before:rounded-br-xl before:shadow-[3px_3px_0px_0px_currentColor]
          "
        >
          <button
            onClick={() => router.back()}
            className=" inline-block px-6 py-3 rounded-lg bg-white text-purple-600 font-bold hover:bg-purple-300 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

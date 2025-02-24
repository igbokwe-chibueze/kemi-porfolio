// app/not-found.tsx

// This is the second version of the not-found.tsx script, the first version is in the component file, but not in use.
// The difference is in how the inverted border radius is handled .

"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="relative bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 text-center max-w-md mx-4">

        <div
          className=' space-y-4 py-8'
        >
          <h1 className=" text-6xl lg:text-8xl font-extrabold text-white">404</h1>
          <p className=" text-3xl text-white">Page Not Found</p>
          <p className=" font-gT-WalsheimPro text-xl lg:text-2xl font-normal 
              text-pretty tracking-tight text-white">
            Oops! It looks like the page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>

        <div
          className=" absolute left-0 top-0 bg-blue-500 rounded-br-[12px] pr-2 pb-2

            after:absolute after:w-[12px] after:h-[12px] after:right-[-12px] after:top-0 
            after:bg-[radial-gradient(circle_12px_at_bottom_right,_#0000_98%,_#3b82f6)]

            before:absolute before:w-[12px] before:h-[12px] before:bottom-[-12px] before:left-0
            before:bg-[radial-gradient(circle_12px_at_bottom_right,_#0000_98%,_#3b82f6)]
          "
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded hover:bg-purple-300 transition"
          >
            Go Home
          </Link>
        </div>

        <div className=" absolute bottom-0 right-0 bg-blue-500 rounded-tl-[12px] pl-2 pt-2

          after:absolute after:w-[12px] after:h-[12px] after:right-0 after:top-[-12px] 
          after:bg-[radial-gradient(circle_12px_at_top_left,_#0000_98%,_#3b82f6)]

          before:absolute before:w-[12px] before:h-[12px] before:bottom-0 before:left-[-12px]
          before:bg-[radial-gradient(circle_12px_at_top_left,_#0000_98%,_#3b82f6)]
          "
        >
          <button
            onClick={() => router.back()}
            className=" inline-block px-6 py-3 rounded-[10px] bg-white text-purple-600 font-bold 
            hover:bg-purple-300 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

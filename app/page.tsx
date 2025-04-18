"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full h-dvh flex justify-center items-center bottom-4 right-0 z-30 pr-4 gap-4">
        <Link
          href="/grammar/1"
          className="block shadow bg-blue-300 p-2 rounded-full font-extrabold"
        >
          文法
        </Link>

        <Link
          href="/list"
          className="block shadow bg-blue-300 p-2 rounded-full"
        >
          🖋️
        </Link>

        <Link
          href="/mywords"
          className="block shadow bg-blue-300 p-2 rounded-full"
        >
          ❤️
        </Link>
      </div>
    </>
  );
};

export default Page;

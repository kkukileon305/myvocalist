"use client";

import Link from "next/link";
import Search from "@/app/Search";

const Page = () => {
  return (
    <>
      <Search />

      <div className="w-full fixed justify-end bottom-4 right-0 z-30 flex pr-4 gap-4">
        <Link
          href="/list"
          className="block shadow bg-blue-300 p-2 rounded-full"
        >
          🖋️
        </Link>
      </div>
    </>
  );
};

export default Page;

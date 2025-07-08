"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [size, setSize] = useState(30);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-dvh gap-4">
        <p>請輸入頁面尺寸</p>

        <input
          type="number"
          className="focus:outline-none border p-2 rounded"
          onChange={(event) =>
            setSize(
              isNaN(event.currentTarget.valueAsNumber)
                ? 0
                : event.currentTarget.valueAsNumber,
            )
          }
          placeholder="請輸入頁面尺寸"
          value={size}
        />

        <Link
          href={`/grammar/1?size=${size > 0 ? size : 30}`}
          className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full font-extrabold"
        >
          進入
        </Link>
      </div>
    </>
  );
};

export default Page;

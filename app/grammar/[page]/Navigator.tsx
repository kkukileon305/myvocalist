"use client";

import React, { FormEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useScrollUp } from "@/utils/hooks";

type NavigatorProps = { page: number; size: number };

const Navigator = ({ page, size }: NavigatorProps) => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const isScrollUp = useScrollUp();

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // 스크롤 막기
      window.scrollTo(0, 0); // 최상단으로 이동
    } else {
      document.body.style.overflow = ""; // 스크롤 허용
    }

    return () => {
      document.body.style.overflow = ""; // 클린업 함수 (컴포넌트 언마운트 시 초기화)
    };
  }, [modal]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    router.push(`/grammar/${value}?size=${size}`);
    setModal(false);
  };

  const handleCopy = async () => {
    const url = new URL(window.location.href);
    const pathWithoutSearch = url.origin + url.pathname;
    await navigator.clipboard.writeText(pathWithoutSearch + "/pdf");
  };

  return (
    <>
      {modal && (
        <div className="absolute z-40 left-0 top-0 w-full h-full bg-black/50 backdrop-blur-lg flex justify-center items-center">
          <div className="p-4 bg-gray-200 rounded-xl">
            <form onSubmit={onSubmit} className="flex">
              <input
                type="number"
                className="outline-none p-2 bg-blue-200 rounded-md w-full disabled:bg-gray-400"
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="w-10 h-10 cursor-pointer" type="submit">
                🔍
              </button>
            </form>
            <button
              onClick={() => setModal(false)}
              className="cursor-pointer bg-pink-200 w-full rounded-md mt-4"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <div
        className={`w-full sticky bg-blue-300 p-2 top-0 flex justify-center right-0 z-30 pr-4 gap-4 transition-all ${isScrollUp ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link href="/" className="block bg-white p-2 rounded-full">
          🏠
        </Link>
        <div
          className="block bg-white p-2 rounded-full cursor-pointer"
          onClick={() => setModal(true)}
        >
          📤
        </div>

        {Number(page) - 1 > 0 && (
          <Link
            href={`/grammar/${Number(page) - 1}?size=${size}`}
            className="block bg-white p-2 rounded-full"
          >
            {"<"}
          </Link>
        )}

        <Link
          href={`/grammar/${Number(page) + 1}?size=${size}`}
          className="block bg-white p-2 rounded-full"
        >
          {">"}
        </Link>

        <button
          onClick={handleCopy}
          className="font-extrabold bg-white rounded-full px-2 cursor-pointer"
        >
          PDF
        </button>
      </div>
    </>
  );
};

export default Navigator;

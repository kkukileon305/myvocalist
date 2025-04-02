"use client";

import React, { FormEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import MovePage from "@/app/list/MovePage";
import { useRouter } from "next/navigation";

type NavigatorProps = { page: number };

const Navigator = ({ page }: NavigatorProps) => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

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

    router.push(`/list?page=${value}`);
    localStorage.setItem("beforePage", `${value}`);
    setModal(false);
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

      <div className="w-full sticky justify-end bottom-4 right-0 z-30 flex pr-4 gap-4">
        <div
          className="block shadow bg-blue-300 p-2 rounded-full cursor-pointer"
          onClick={() => setModal(true)}
        >
          📤
        </div>

        <Link href="/" className="block shadow bg-blue-300 p-2 rounded-full">
          🏠
        </Link>

        {page !== 1 && <MovePage page={page} isNext={false} />}
        {page < 733 && <MovePage page={page} isNext={true} />}

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

export default Navigator;

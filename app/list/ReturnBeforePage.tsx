"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const ReturnBeforePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const beforePage = parseInt(localStorage.getItem("beforePage") || "1");

  useEffect(() => {
    if (!isClicked) {
      document.body.style.overflow = "hidden"; // 스크롤 막기
    } else {
      document.body.style.overflow = ""; // 스크롤 허용
    }

    return () => {
      document.body.style.overflow = ""; // 클린업 함수 (컴포넌트 언마운트 시 초기화)
    };
  }, [isClicked]);

  if (isClicked) return <></>;

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-40 flex justify-center items-center">
      <Link
        href={`/list?page=${beforePage}`}
        className="p-2 w-32 h-32 bg-blue-200 text-2xl shadow font-bold rounded-full flex justify-center items-center"
        onClick={() => setIsClicked(true)}
      >
        {beforePage} {">"}
      </Link>
    </div>
  );
};

export default ReturnBeforePage;

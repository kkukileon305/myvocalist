"use client";

import React, { useState } from "react";
import Link from "next/link";

const ReturnBeforePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const beforePage = parseInt(localStorage.getItem("beforePage") || "1");

  if (isClicked) return <></>;

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-40 flex justify-center items-center">
      <Link
        href={`/?page=${beforePage}`}
        className="p-2 w-32 h-32 bg-blue-200 text-2xl shadow font-bold rounded-full flex justify-center items-center"
        onClick={() => setIsClicked(true)}
      >
        {beforePage} {">"}
      </Link>
    </div>
  );
};

export default ReturnBeforePage;

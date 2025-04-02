"use client";

import React from "react";
import Link from "next/link";

type MovePageProps = {
  page: number;
  isNext: boolean;
};

const MovePage = ({ page, isNext }: MovePageProps) => {
  const onClick = () => {
    localStorage.setItem("beforePage", `${isNext ? page + 1 : page - 1}`);
  };

  return (
    <Link
      href={`?page=${isNext ? page + 1 : page - 1}`}
      onClick={onClick}
      className="bg-blue-300 shadow w-10 h-10 flex justify-center items-center font-extrabold p-2 rounded-full"
    >
      {isNext ? ">" : "<"}
    </Link>
  );
};

export default MovePage;

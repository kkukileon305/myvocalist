import "./test.css";
import { datas } from "@/app/grammar/[page]/data";
import Link from "next/link";
import React from "react";
import Navigator from "@/app/grammar/[page]/Navigator";

function getArrayChunkFromArray(n: number) {
  const chunkSize = 10;
  const startIndex = (n - 1) * chunkSize;
  const endIndex = n * chunkSize;
  return datas.slice(startIndex, endIndex);
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  const contents = getArrayChunkFromArray(Number(page));

  return (
    <>
      <div className="w-full fixed justify-end bottom-4 right-0 z-30 flex pr-4 gap-4"></div>
      <div className="max-w-5xl w-full mx-auto p-2">
        {contents.map((content, i) => (
          <div
            className="w-full mb-4 bg-white rounded-xl shadow-md p-4"
            key={i}
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        ))}
      </div>
      <Navigator page={Number(page)} />
    </>
  );
}

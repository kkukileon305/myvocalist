import "../test.css";
import { datas } from "@/app/grammar/[page]/data";
import Navigator from "@/app/grammar/[page]/Navigator";
import React from "react";

function getArrayChunkFromArray(n: number) {
  const chunkSize = 30;
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
      <div className="max-w-5xl w-full mx-auto p-2">
        {contents.map((content, i) => (
          <div
            className="w-full mb-4 bg-white border-b border-gray-400 border-dotted pb-2"
            key={i}
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        ))}
      </div>
    </>
  );
}

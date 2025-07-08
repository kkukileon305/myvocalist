import { datas } from "@/app/grammar/[page]/data";
import React from "react";
import Navigator from "@/app/grammar/[page]/Navigator";
import LoadStyle from "@/app/grammar/[page]/LoadStyle";

function getArrayChunkFromArray(n: number, chunkSize: number) {
  const startIndex = (n - 1) * chunkSize;
  const endIndex = n * chunkSize;
  return datas.slice(startIndex, endIndex);
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ size: string }>;
}) {
  const { page } = await params;
  const { size } = await searchParams;

  const contents = getArrayChunkFromArray(Number(page), Number(size));

  return (
    <>
      <LoadStyle />
      <Navigator page={Number(page)} size={Number(size)} />
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

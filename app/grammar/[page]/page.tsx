import { datas } from "@/app/grammar/[page]/data";
import React from "react";
import Navigator from "@/app/grammar/[page]/Navigator";
import LoadStyle from "@/app/grammar/[page]/LoadStyle";
import { redirect } from "next/navigation";

function getArrayChunkFromArray(n: number, chunkSize: number) {
  const startIndex = (n - 1) * chunkSize;
  const endIndex = n * chunkSize;
  return datas.slice(startIndex, endIndex).map((item, i) => ({
    index: startIndex + i + 1, // 원본 배열 기준 index
    item,
  }));
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

  if (!parseInt(page) || !parseInt(size)) {
    redirect("/");
  }

  const contents = getArrayChunkFromArray(Number(page), Number(size));

  return (
    <>
      <LoadStyle />
      <Navigator page={Number(page)} size={Number(size)} />
      <div className="max-w-5xl w-full mx-auto p-2">
        {contents.map((content) => (
          <div
            key={content.index}
            className="w-full mb-4 bg-white border-b border-gray-400 border-dotted pb-2"
          >
            <h2 className="font-bold !text-3xl mb-4">第{content.index}課</h2>
            <div
              key={content.index}
              dangerouslySetInnerHTML={{
                __html: content.item,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

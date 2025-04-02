"use client";

import Link from "next/link";
import React, { FormEventHandler, useState } from "react";
import { searchWords } from "@/app/search/actions";
import { Type } from "@/app/page";
import View from "@/app/View";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Type[]>([]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!value) return;

    const data = await searchWords(value);
    if (data) setResult(data);

    setLoading(false);
  };

  const noteList = result.map((n) => {
    const [character, , , zhuyin, meaning] = n.flds!.split("\u001f");

    return {
      id: n.id,
      character,
      zhuyin,
      meaning,
    };
  });

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={onSubmit} className="flex mb-4 p-2">
          <input
            type="text"
            className="outline-none p-2 bg-blue-200 rounded-md w-full disabled:bg-gray-400"
            onChange={(e) => setValue(e.target.value)}
            placeholder="中文搜尋..."
            disabled={loading}
          />
          <button
            className="w-10 h-10 cursor-pointer"
            type="submit"
            disabled={loading}
          >
            🔍
          </button>
        </form>

        <div className="p-2">
          {noteList.map((note) => (
            <div
              key={note.id}
              className="bg-purple-300 rounded-md overflow-hidden shadow mb-4 flex items-center"
            >
              <p className="w-1/2 p-2 text-4xl font-extrabold text-center">
                {note.character}
              </p>

              <div className="flex w-1/2 font-bold text-xl">
                <div className="w-[1px] bg-blue-700" />
                <View word={note} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sticky justify-end bottom-4 right-0 z-30 flex pr-4 gap-4">
        <Link href="/" className="block shadow bg-blue-300 p-2 rounded-full">
          🏠
        </Link>
      </div>
    </>
  );
};

export default Page;

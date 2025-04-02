"use client";

import React, { FormEventHandler, useState } from "react";
import { getWordByKeyword } from "@/app/search/actions";
import { Type } from "@/app/page";
import View from "@/app/View";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();
  const page = parseInt(params.get("page") || "1", 10);

  const [value, setValue] = useState("");
  const [result, setResult] = useState<Type[]>([]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!value) return;

    const data = await getWordByKeyword(value);

    setResult(data);
  };

  const noteList = result.map((n) => {
    const [character, , , zhuyin, meaning] = n.flds.split("\u001f");

    return {
      id: n.id,
      character,
      zhuyin,
      meaning,
    };
  });

  return (
    <>
      <div>
        <form
          onSubmit={onSubmit}
          className="flex justify-center items-center py-2"
        >
          <input
            className="p-2 bg-blue-200 outline-none"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type={"submit"}>🔍</button>
        </form>

        <div className="max-w-4xl mx-auto">
          <div className="p-2">
            {noteList.map((note) => (
              <div
                key={note.id}
                className="bg-purple-300 rounded-md overflow-hidden shadow mb-4 flex items-center"
              >
                <p className="w-1/2 p-2 text-4xl font-extrabold">
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
      </div>

      <div className="w-full sticky justify-end bottom-4 right-0 z-30 flex pr-4 gap-4">
        <button
          onClick={() => {
            window.history.back();
          }}
          className="block shadow bg-blue-300 p-2 rounded-full cursor-pointer"
        >
          {"<<"}
        </button>
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

export default Page;

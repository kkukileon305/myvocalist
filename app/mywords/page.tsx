"use client";

import React, { useEffect, useState } from "react";
import View from "@/app/View";
import { Word } from "@/app/page";

const Page = () => {
  const [storedData, setStoredData] = useState<string>("[]");

  const loadWords = () => {
    const newWords = localStorage.getItem("words") || "[]";
    setStoredData(newWords);
  };

  const parsed = JSON.parse(storedData) as string[];
  const noteList = parsed.map((s) => JSON.parse(s)) as Word[];

  useEffect(() => {
    loadWords();

    const updateSavedWords = () => {
      loadWords();
    };

    window.addEventListener("localStorage", updateSavedWords);

    return () => {
      window.removeEventListener("localStorage", updateSavedWords);
    };
  }, []);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-2">
        {noteList.map((note) => (
          <div
            key={note.id}
            className="bg-purple-300 rounded-md overflow-hidden shadow mb-4 flex items-center"
          >
            <p className="w-1/2 p-2 text-4xl font-extrabold">
              {note.character}
            </p>

            <div className="flex w-1/2 font-bold text-xl relative">
              <div className="w-[1px] bg-blue-700" />
              <View word={note} />
            </div>
          </div>
        ))}
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
      </div>
    </div>
  );
};

export default Page;

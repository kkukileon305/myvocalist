"use client";

import React, { useEffect, useState } from "react";
import View from "@/app/View";
import { Word } from "@/app/list/page";

const MyWords = () => {
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
    <div className="max-w-4xl mx-auto p-2">
      {noteList.map((note) => (
        <div
          key={note.id}
          className="bg-purple-300 rounded-md overflow-hidden shadow mb-4 flex items-center"
        >
          <p className="w-1/2 p-2 text-4xl font-extrabold">{note.character}</p>

          <div className="flex w-1/2 font-bold text-xl relative">
            <div className="w-[1px] bg-blue-700" />
            <View word={note} />
          </div>
        </div>
      ))}

      {noteList.length === 0 && <p className="text-center">你的詞彙...</p>}
    </div>
  );
};

export default MyWords;

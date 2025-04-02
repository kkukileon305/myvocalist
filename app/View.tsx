"use client";

import React, { useState } from "react";
import { Word } from "@/app/page";
import WindowChecker from "@/app/WindowChecker";
import AddWord from "@/app/AddWord";

type ViewProps = {
  word: Word;
};

const View = ({ word }: ViewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-[80px] relative p-2 bg-blue-200 w-full overflow-hidden flex ">
      {!isOpen && (
        <div className="absolute w-full h-full left-0 top-0 bg-red-200 flex justify-center items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white bg-blue-400 rounded text-sm p-1 cursor-pointer"
          >
            OPEN
          </button>
        </div>
      )}

      <div className="w-[calc(100%-28px)] break-keep">
        <p>{word.zhuyin}</p>
        <p>{word.meaning}</p>
      </div>

      <div className="w-7 flex flex-col justify-between">
        <div className="flex items-center justify-center">
          <WindowChecker>
            <AddWord word={word} />
          </WindowChecker>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="bg-blue-400 rounded text-sm cursor-pointer text-white"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default View;

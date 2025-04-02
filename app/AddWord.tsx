"use client";

import { Word } from "@/app/page";
import React, { useEffect, useState } from "react";

type AddWordProps = {
  word: Word;
};

const AddWord = ({ word }: AddWordProps) => {
  const [savedWords, setSavedWords] = useState<string[]>([]);

  const loadWords = () => {
    const newWords = localStorage.getItem("words") || "[]";
    setSavedWords(JSON.parse(newWords));
  };

  const addWord = () => {
    const newWords = [...savedWords, JSON.stringify(word)];
    setSavedWords(newWords);
    localStorage.setItem("words", JSON.stringify(newWords));
    window.dispatchEvent(new Event("localStorage"));
  };

  const removeWord = () => {
    const newWords = savedWords.filter((w) => JSON.parse(w).id !== word.id);
    setSavedWords(newWords);
    localStorage.setItem("words", JSON.stringify(newWords));
    window.dispatchEvent(new Event("localStorage"));
  };

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

  if (savedWords.find((p) => JSON.parse(p).id === word.id)) {
    return (
      <button onClick={removeWord} className="rounded text-sm cursor-pointer">
        💛
      </button>
    );
  }

  return (
    <button onClick={addWord} className="rounded text-sm cursor-pointer">
      ❤️
    </button>
  );
};

export default AddWord;

"use server";

import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { Type } from "@/app/page";

export async function searchWords(word: string) {
  const dbPath = path.join(process.cwd(), "database", "collection.anki2");

  // 파일이 존재하는지 확인
  if (!fs.existsSync(dbPath)) {
    throw new Error("Database file not found");
  }

  // SQLite 데이터베이스 연결
  const db = new Database(dbPath, { readonly: true });

  // 예제: 카드 목록 가져오기
  const cards = db
    .prepare("SELECT id, flds FROM notes WHERE flds LIKE ?")
    .all(`%${word}%`) as Type[];

  // 연결 해제
  db.close();

  return cards;
}

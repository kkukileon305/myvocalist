"use server";

import path from "path";
import Database from "better-sqlite3";
import { Type } from "@/app/page";

export async function getWordByKeyword(word: string) {
  const apkgPath = path.join(process.cwd(), "collection.anki2");
  const db = new Database(apkgPath, { readonly: true });

  const rows = db
    .prepare("SELECT * FROM notes WHERE flds LIKE ?")
    .all(`%${word}%`) as Type[];

  db.close();
  return rows;
}

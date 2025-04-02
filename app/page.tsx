import React from "react";
import Database from "better-sqlite3";
import path from "path";
import View from "@/app/View";
import Link from "next/link";

export interface Type {
  id: number;
  guid: string;
  mid: number;
  mod: number;
  usn: number;
  tags: string;
  flds: string;
  sfld: string;
  csum: number;
  flags: number;
  data: string;
}

export type Word = {
  id: number;
  character: string;
  zhuyin: string;
  meaning: string;
};

async function getPaginatedApkgData(
  page: number,
  pageSize: number = 10,
): Promise<Type[]> {
  const apkgPath = path.join(process.cwd(), "public", "collection.anki2");
  const db = new Database(apkgPath, { readonly: true });

  // OFFSET을 사용하여 데이터 가져오기
  const offset = (page - 1) * pageSize;
  const rows = db
    .prepare("SELECT id, flds FROM notes LIMIT ? OFFSET ?")
    .all(pageSize, offset) as Type[];

  db.close();
  return rows;
}

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const page = parseInt((await searchParams).page || "1", 10);
  const notes = await getPaginatedApkgData(page);

  const noteList = notes.map((n) => {
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
      <div className="w-full sticky justify-end bottom-4 right-0 z-30 flex pr-4 gap-4">
        {page !== 1 && (
          <Link
            href={`?page=${page - 1}`}
            className="bg-blue-300 shadow w-10 h-10 flex justify-center items-center font-extrabold p-2 rounded-full"
          >
            {"<"}
          </Link>
        )}
        {page < 733 && (
          <Link
            href={`?page=${page + 1}`}
            className="bg-blue-300 shadow w-10 h-10 flex justify-center items-center font-extrabold p-2 rounded-full"
          >
            {">"}
          </Link>
        )}

        <Link
          href="/search"
          className="block shadow bg-blue-300 p-2 rounded-full"
        >
          🔍
        </Link>

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

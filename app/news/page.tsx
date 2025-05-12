import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="p-2 flex justify-center items-center bg-blue-300 gap-2">
        <Link
          href="/"
          className="w-24 text-center block shadow bg-white hover:bg-blue-100 transition p-2 rounded-full font-extrabold"
        >
          大廳
        </Link>

        <Link
          href="/news"
          className="w-24 text-center block shadow bg-white hover:bg-blue-100 transition p-2 rounded-full font-extrabold"
        >
          新聞
        </Link>
      </div>
      <div className="max-w-3xl mx-auto p-2">
        <Link href={"/news/1"}>go to 1</Link>
      </div>
    </>
  );
};

export default Page;

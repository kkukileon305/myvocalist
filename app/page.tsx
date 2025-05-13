import Link from "next/link";

const Page = async () => {
  return (
    <>
      <header className="sticky top-0 border-b border-gray-300 bg-white z-30">
        <div className="max-w-6xl mx-auto p-4 flex justify-center gap-2 text-white">
          <Link
            href="/grammar/1"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full font-extrabold"
          >
            文法
          </Link>

          <Link
            href="/news"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full font-extrabold"
          >
            新聞
          </Link>

          <Link
            href="/list"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full"
          >
            辭典
          </Link>

          <Link
            href="/mywords"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full"
          >
            我的詞彙
          </Link>
        </div>
      </header>
      <div className="flex justify-center items-center">個人用PAGE</div>
    </>
  );
};

export default Page;

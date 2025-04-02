import MyWords from "@/app/mywords/MyWords";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <MyWords />

      <div className="w-full sticky justify-end bottom-4 right-0 z-30 flex pr-4 gap-4">
        <Link href="/" className="block shadow bg-blue-300 p-2 rounded-full">
          🏠
        </Link>
      </div>
    </div>
  );
};

export default Page;

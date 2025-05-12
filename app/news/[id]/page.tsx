import dataList from "./data.json";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const data = dataList[0];

  return (
    <>
      {id}
      <div className="max-w-3xl mx-auto p-2">
        <p className="text-xl mb-4">{data.title}</p>
        <p className="whitespace-pre-wrap">{data.content}</p>
      </div>
    </>
  );
};

export default Page;

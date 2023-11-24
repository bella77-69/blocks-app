import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const blocks = await db.block.findMany();
  const renderedBlocks = blocks.map((block) => (
    <Link
      key={block.id}
      href={`/blocks/${block.id}`}
      className="flex justify-between items-center p-2 border rounded hover:bg-gray-200"
    >
      {block.title}
      <div>View</div>
    </Link>
  ));
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="flex m-2 justify-between items-center ">
        <h1 className="font-bold text-xl">Blocks</h1>
        <Link href="/blocks/new" className="border rounded p-2">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedBlocks}</div>
    </div>
  );
}

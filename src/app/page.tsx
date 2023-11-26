import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const blocks = await db.block.findMany();
  const renderedBlocks = blocks.map((block) => (
    <Link
      key={block.id}
      href={`/blocks/${block.id}`}
      className="flex-row p-2 bg-[#f7f8f8] rounded shadow-md hover:shadow-lg transition duration-300"
    >
      {block.title}
      <div className="btn text-[#0b0a0a] hover:text-[#FFFFFF]">View</div>
    </Link>
  ));
  return (
    <div className=" min-h-screen p-4">
      <div className="flex-row m-2">
        <h1 className="text-[#0b0a0a] font-bold text-xl">Blocks</h1>
        <Link
          href="/blocks/new"
          className="btn text-[#0b0a0a] hover:text-[#FFFFFF]"
        >
          New
        </Link>
      </div>
      <div className="flex-column gap-6 mt-6">{renderedBlocks}</div>
    </div>
  );
}

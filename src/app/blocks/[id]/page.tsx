import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

// interface Block {
//   id: number;
//   title: string;
//   code: string;
// }

interface BlockParams {
  params: {
    id: string;
  };
}

export default async function page({ params }: BlockParams) {
  const id = params.id;

  const block = await db.block.findUnique({
    where: { id: Number(id) },
  });

  if (!block) {
    redirect("/");
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col gap-4">
      <div className="flex m-2 justify-between items-center">
        <h1 className="font-bold text-xl">View Block</h1>
      </div>

      <div className="flex gap-4 m-3 items-center">
        <label className="w-12" htmlFor="title">
          {block.title}
        </label>
        {block.code}

        <div className="ml-auto">
          <Link href={`/blocks/${block.id}/edit`}>
            <button
              className="rounded p-2 mr-2 bg-blue-600 text-white hover:bg-blue-400"
              type="submit"
            >
              Edit
            </button>
          </Link>
          <Link href={`/blocks/${block.id}/delete`}>
            <button
              className="rounded p-2 bg-blue-600 text-white hover:bg-blue-400"
              type="submit"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

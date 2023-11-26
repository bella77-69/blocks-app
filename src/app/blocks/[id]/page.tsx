import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

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
    <div className="min-h-screen p-4 flex flex-col">
      <div className="flex-column m-4">
        <h1 className="text-[#0b0a0a] font-bold text-xl">View Block</h1>
        <Link href={"/"}>
          <button
            className="btn text-[#0b0a0a] hover:text-[#FFFFFF] mt-3"
            type="submit"
          >
            Back
          </button>
        </Link>
      </div>

      <div className="flex justify-between gap-4 m-6">
        <div className="flex items-center">
          <label className="text-[#0b0a0a] font-bold" htmlFor="title">
            {block.title}
          </label>
        </div>

        <div className="m-3">
          <Link href={`/blocks/${block.id}/edit`}>
            <button
              className="btn m-2 text-[#0b0a0a] hover:text-[#FFFFFF]"
              type="submit"
            >
              Edit
            </button>
          </Link>
          <Link href={"/"}>
            <button
              className="btn text-[#0b0a0a] hover:text-[#FFFFFF]"
              type="submit"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
      <div className="flex gap-4 m-3 bg-[#f7f8f8] rounded shadow-md hover:shadow-lg transition duration-300">
        <code className="text-[#0b0a0a] p-6">{block.code}</code>
      </div>
    </div>
  );
}

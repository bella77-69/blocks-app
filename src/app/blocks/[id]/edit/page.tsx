import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

interface BlockParams {
  params: {
    id: string;
  };
}

export default async function Edit({ params }: BlockParams) {
  const id = params.id;
  console.log(id);
  async function updateBlock(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.block.update({
      where: { id: Number(params.id) },
      data: { title, code },
    });
    redirect(`/blocks/${id}`);
  }

  const block = await db.block.findUnique({
    where: { id: Number(id) },
  });

  return (
    <form action={updateBlock} className="min-h-screen p-2">
      <div className="flex-column m-4">
        <h1 className="text-[#0b0a0a] font-bold text-xl">Edit Block</h1>
        <div className="flex-column gap-6 mt-4">
          <div className="flex gap-4 ">
            <label className="text-[#0b0a0a] w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              id="title"
              placeholder="Title"
              className="border rounded p-2 w-full"
              defaultValue={block?.title ?? ""}
            />
          </div>
          <div className="flex gap-4">
            <label className=" text-[#0b0a0a] w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="code"
              placeholder="Code"
              defaultValue={block?.code ?? ""}
            />
          </div>
          <div className="flex">
            <button type="submit" className="btn hover:text-[#FFFFFF] m-2">
              Update
            </button>
            <button className="btn hover:text-[#FFFFFF] m-2">Back</button>
          </div>
        </div>
      </div>
    </form>
  );
}

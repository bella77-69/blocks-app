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

    await db.block.update({ where: { id: Number(params.id) }, data: { title, code } });
    redirect("/");
  }


  return (
    <form action={updateBlock} className="bg-gray-100 min-h-screen p-4">
      <h1 className="font-bold text-xl">Edit Block</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"

            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"

          />
        </div>
        <button type='submit' className="rounded p-2 bg-blue-600 text-white hover:bg-blue-400">
          Update
        </button>
      </div>
    </form>
  );
}

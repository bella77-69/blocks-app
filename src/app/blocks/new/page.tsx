import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

function page() {
  async function createBlock(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.block.create({ data: { title, code } });
    redirect("/");
  }
  return (
    <form action={createBlock}>
      <h3 className="font-bold m-3">Create a Block</h3>
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
        <button
          className="rounded p-2 bg-blue-600 text-white hover:bg-blue-400"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default page;

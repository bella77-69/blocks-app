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
    <form action={createBlock} className="min-h-screen p-2">
      <div className="flex-column m-4">
        <h1 className="text-[#0b0a0a] font-bold text-xl">Create a Block</h1>
        <div className="flex-column gap-6 mt-4">
          <div className="flex gap-4">
            <label className="text-[#0b0a0a] w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              id="title"
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="flex gap-4">
            <label className="text-[#0b0a0a] w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
          <div className="flex">
            <button className="btn hover:text-[#FFFFFF]" type="submit">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default page;

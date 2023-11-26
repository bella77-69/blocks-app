import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#8cc9b3] text-[#0b0a0a]">
      <div className="container mx-auto flex-row p-6">
        <Link href="/" className="text-2xl font-bold hover:text-[#28735e]">
          Code Blocks
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-700 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold ">
          Blocks
        </Link>

      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/next.svg"
          alt="Logo"
          width={200}
          height={60}
          className="h-16 w-auto"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link href="/weather">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Weather App
          </button>
        </Link>
        <Link href="/lesson">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Lesson App
          </button>
        </Link>
      </div>
    </div>
  );
}

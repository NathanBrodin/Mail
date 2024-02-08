import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen min-h-screen  flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
        Work in progress...
      </h1>
      <p>This page is still under construction. Please come back later.</p>

      <div className="mt-8">
        <Link href="/discover" className="text-primary-accent-500 hover:underline">
          Go back to the Discover page
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="flex items-start justify-center gap-2">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={140}
            height={38}
            priority
          />
          <span className="font-semibold text-3xl">Cache Playground</span>
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)]">
          Build time:{" "}
          <code className="bg-black/[.05] px-1 py-0.5 rounded font-semibold">
            {new Date().toISOString()}
          </code>
        </p>
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/static-rendering"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Static Rendering
            </span>
          </Link>
          <Link
            href="/static-rendering-revalidate-5s"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Static Rendering (Revalidate: 5 seconds)
            </span>
          </Link>
          <Link
            href="/no-store-fetch"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Fetching Data (No Store)
            </span>
          </Link>
          <Link
            href="/no-cache-fetch"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Fetching Data (No Cache)
            </span>
          </Link>
          <Link
            href="/force-cache-fetch"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Fetching Data (Force Cache)
            </span>
          </Link>
          <Link
            href="/dynamic-function"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Dynamic Function
            </span>
          </Link>
          <Link
            href="/force-dynamic"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Force Dynamic
            </span>
          </Link>
          <Link
            href="/revalidate-functions"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              Revalidate Functions
            </span>
          </Link>
          <Link
            href="/ppr"
            className="text-xl font-semibold text-center hover:opacity-75"
          >
            <span className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
              PPR
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

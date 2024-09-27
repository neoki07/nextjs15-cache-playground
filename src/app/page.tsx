import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="flex items-start justify-center gap-2">
          <Image
            className="dark:invert"
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
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            {new Date().toISOString()}
          </code>
        </p>
      </main>
    </div>
  );
}

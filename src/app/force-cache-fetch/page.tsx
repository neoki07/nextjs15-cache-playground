export default async function Page() {
  const now: string = await fetch("http://localhost:8000/now", {
    cache: "force-cache",
  })
    .then((res) => res.json())
    .then((res) => res.now);

  return (
    <div className="flex justify-center">
      <div className="p-8 space-y-4">
        <h1 className="text-4xl font-semibold text-center">
          Fetching Data (Force Cache)
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)]">
          Fetched at:{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            {now}
          </code>
        </p>
      </div>
    </div>
  );
}

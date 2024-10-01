export async function StaticRenderingArea() {
  const now: string = await fetch("http://localhost:8000/now", {
    cache: "force-cache",
  })
    .then((res) => res.json())
    .then((res) => res.now);

  return (
    <div className="px-5 py-4 space-y-4 border rounded-lg">
      <h2 className="text-xl font-semibold">Static Rendering Area</h2>
      <p className="font-[family-name:var(--font-geist-mono)]">
        Fetched at:{" "}
        <code className="bg-black/[.05] px-1 py-0.5 rounded font-semibold">
          {now}
        </code>
      </p>
    </div>
  );
}

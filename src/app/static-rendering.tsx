export function StaticRendering() {
  return (
    <div className="w-full border rounded-md p-4 flex flex-col items-start gap-2">
      <h2 className="text-xl font-semibold text-center">Static Rendering</h2>
      <p className="font-[family-name:var(--font-geist-mono)]">
        Rendered at:{" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          {new Date().toISOString()}
        </code>
      </p>
    </div>
  );
}

import { cookies } from "next/headers";

export default function Page() {
  const _ = cookies();

  return (
    <div className="flex justify-center">
      <div className="p-8 space-y-4">
        <h1 className="text-4xl font-semibold text-center">Dynamic Function</h1>
        <p className="font-[family-name:var(--font-geist-mono)]">
          Rendered at:{" "}
          <code className="bg-black/[.05] px-1 py-0.5 rounded font-semibold">
            {new Date().toISOString()}
          </code>
        </p>
      </div>
    </div>
  );
}

import { RevalidatePathButton } from "./revalidate-path-button";
import { RevalidateTagButton } from "./revalidate-tag-button";

export default async function Page() {
  const nowA: string = await fetch("http://localhost:8000/now?a", {
    cache: "force-cache",
    next: {
      tags: ["a"],
    },
  })
    .then((res) => res.json())
    .then((res) => res.now);

  const nowB: string = await fetch("http://localhost:8000/now?b", {
    cache: "force-cache",
    next: {
      tags: ["b"],
    },
  })
    .then((res) => res.json())
    .then((res) => res.now);

  return (
    <div className="flex justify-center">
      <div className="p-8 space-y-4">
        <h1 className="text-4xl font-semibold text-center">
          Revalidate Functions
        </h1>
        <div className="flex flex-col">
          <RevalidatePathButton label="Revalidate All" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-[family-name:var(--font-geist-mono)]">
            (A) Fetched at:{" "}
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-semibold">
              {nowA}
            </code>
          </p>
          <RevalidateTagButton tag="a" label="Revalidate A" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-[family-name:var(--font-geist-mono)]">
            (B) Fetched at:{" "}
            <code className="bg-black/[.05] px-1 py-0.5 rounded font-semibold">
              {nowB}
            </code>
          </p>
          <RevalidateTagButton tag="b" label="Revalidate B" />
        </div>
      </div>
    </div>
  );
}

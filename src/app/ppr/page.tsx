import { Suspense } from "react";
import { DynamicRenderingArea } from "./dynamic-rendering-area";
import { StaticRenderingArea } from "./static-rendering-area";

export const experimental_ppr = true;

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="p-8 space-y-4">
        <h1 className="text-4xl font-semibold text-center">PPR</h1>
        <StaticRenderingArea />
        <Suspense>
          <DynamicRenderingArea />
        </Suspense>
      </div>
    </div>
  );
}

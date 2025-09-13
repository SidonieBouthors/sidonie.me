"use client";

import { aboutSnippets } from "@/.velite";
import CardGrid from "@/components/CardGrid";
import InfoBox from "@/components/InfoBox";
import { MDXContent } from "@/components/MDXContent";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DashboardPage() {
  const gridFormat: [string, number, number, boolean?][] = [
    ["xl", 1200, 4],
    ["l", 950, 3],
    ["m", 650, 2],
    ["s", 200, 1, true],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [0, 0];

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <ResponsiveGridLayout>
        {aboutSnippets.map((snippet) => (
          <div
            className={
              "about-snippet " + (snippet.theme ? `${snippet.theme}-theme` : "")
            }
            style={{
              backgroundColor: snippet.color ? `#${snippet.color}` : "inherit",
            }}
            key={snippet.slug}
          >
            <MDXContent code={snippet.body} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

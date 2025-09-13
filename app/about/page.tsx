import portrait from "@public/portrait.svg";

import { AboutSnippet, aboutSnippets } from "@content";
import CardGrid from "@components/CardGrid";
import { MDXContent } from "@components/MDXContent";
import Link from "next/link";
import { Fragment } from "react";
import ExportedImage from "next-image-export-optimizer";
import { prioritySort } from "@/utils/utils";

export const metadata = {
  title: "About",
  description: "Learn more about Sidonie Bouthors",
};

export default function About() {
  var sortedSnippets = aboutSnippets.slice().sort(prioritySort);

  const gridFormat: [string, number, number, boolean?][] = [
    ["xl", 1200, 4],
    ["l", 950, 3],
    ["m", 650, 2],
    ["s", 200, 1, true],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [0, 0];
  const sizes: [number, number][] = sortedSnippets.map((snippet) => [
    snippet.width,
    snippet.height,
  ]);

  return (
    <div className="about-page">
      <h1>About</h1>
      <div className="about-hero">
        <div className="about-text">
          <h2>Hello there!</h2>
          <p>
            I{"'"}m <strong>Sidonie Bouthors</strong>, a Computer Science
            student at EPFL in Switzerland.
            <br />
            On this website, I bring together two of my passions: cooking and
            programming. So, whether you{"'"}re here to whip up a delicious
            meal, dive into coding adventures, or simply connect with a fellow
            enthusiast, I hope you find something that sparks your curiosity and
            brings a smile to your face.
            <br />
            <br />
            Thank you for visiting!
          </p>
        </div>
        <img
          className="about-portrait"
          src={portrait.src}
          alt="author portrait"
        />
      </div>
      <CardGrid
        gridFormat={gridFormat}
        margin={margin}
        containerPadding={containerPadding}
        sizes={sizes}
      >
        {sortedSnippets.map((snippet: AboutSnippet) => {
          let logo = snippet.icon ? (
            <ExportedImage
              className="about-snippet-icon"
              src={snippet.icon.src}
              alt={snippet.title ? snippet.title : ""}
              width={snippet.icon.width}
              height={snippet.icon.height}
            />
          ) : (
            <Fragment />
          );
          var wrappedLogo =
            snippet.link && snippet.icon ? (
              <Link
                href={snippet.link!}
                target="_blank"
                rel="noopener noreferrer"
              >
                {logo}
              </Link>
            ) : (
              logo
            );
          return (
            <div
              className={
                "about-snippet " +
                (snippet.theme ? `${snippet.theme}-theme` : "")
              }
              style={{
                backgroundColor: snippet.color
                  ? `#${snippet.color}`
                  : "inherit",
              }}
              key={snippet.slug}
            >
              {wrappedLogo}
              <MDXContent code={snippet.body} />
            </div>
          );
        })}
      </CardGrid>
    </div>
  );
}

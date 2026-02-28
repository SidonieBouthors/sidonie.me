import portrait from "@public/portrait.svg";

import { AboutSnippet, aboutSnippets } from "@content";
import CardGrid from "@components/CardGrid";
import { MDXContent } from "@components/MDXContent";
import Link from "next/link";
import { Fragment } from "react";
import { prioritySort } from "@/utils/utils";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sidonie Bouthors - Computer Science student at EPFL, passionate about cooking and programming",
  openGraph: {
    url: "https://sidonie.me/about",
  },
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
            computer science. Whether you could use a helpful tutorial, want to
            cook up a delicious meal, or simply want to see what I{"'"}m up to,
            I hope you find something that sparks your curiosity.
            <br/>
            You can also have a look at what I{"'"}m doing on <Link
              href="https://github.com/SidonieBouthors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>!
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
            <Image
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

import portrait from "@public/portrait.svg";

import { AboutSnippet, aboutSnippets } from "@content";
import CardGrid from "@components/CardGrid";
import { MDXContent } from "@components/MDXContent";
import Link from "next/link";
import { Fragment } from "react";

export default function About() {
  var sortedSnippets = aboutSnippets.slice().sort((a: AboutSnippet, b: AboutSnippet) => b.priority - a.priority)


  const gridFormat: [string, number, number][] = [
    ["xl", 1200, 4],
    ["l", 900, 3],
    ["m", 600, 2],
    ["s", 200, 1],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [15, 15];
  const sizes: [number, number][] = sortedSnippets
  .map((snippet) => [
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
            I{"'"}m <strong>Sidonie Bouthors</strong>, a Computer Science student at EPFL in
            Switzerland.
            <br />
            On this website, I bring together two of my passions: cooking and
            programming. So, whether you{"'"}re here to whip up a delicious meal,
            dive into coding adventures, or simply connect with a fellow
            enthusiast, I hope you find something that sparks your curiosity and
            brings a smile to your face.
            <br />
            <br />
            Thank you for visiting!
          </p>
        </div>
        <img className="about-portrait" src={portrait.src} alt="author portrait"/>
      </div>
      <CardGrid
        gridFormat={gridFormat}
        margin={margin}
        containerPadding={containerPadding}
        sizes={sizes}
      >
        {sortedSnippets.map((snippet: AboutSnippet) => {
          var WrappedLogo = snippet.link ? (
            <Link
              href={snippet.link!}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="about-snippet-icon" src={snippet.icon?.src} alt={snippet.title}/>
            </Link>
          ) : snippet.icon ? (
            <img className="about-snippet-icon" src={snippet.icon!.src} alt={snippet.title}/>
          ) : (
            <Fragment />
          );
          return (
            <div
              className={"about-snippet " + (snippet.theme ? `${snippet.theme}-theme` : "")}
              style={{
                backgroundColor: snippet.color
                  ? `#${snippet.color}`
                  : "inherit",
              }}
              key={snippet.slug}
            >
              {WrappedLogo}
              <MDXContent code={snippet.body} />
            </div>
          );
        })}
      </CardGrid>
    </div>
  );
}

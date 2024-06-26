import portrait from "@public/portrait.svg";

import { AboutSnippet, aboutSnippets } from "@content";
import CardGrid from "@components/CardGrid";
import { MDXContent } from "@components/MDXContent";

export default function About() {
  const gridFormat: [string, number, number][] = [
    ["xl", 1200, 4],
    ["l", 1000, 3],
    ["m", 400, 2],
    ["s", 200, 1],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [15, 15];
  const sizes: [number, number][] = aboutSnippets.map((snippet) => [snippet.width, snippet.height]);

  return (
    <div className="about-page">
      <h1>About</h1>
      <div className="about-hero">
        <div className="about-text">
          <h2>Hello there!</h2>
          <p>
            My name is Sidonie Bouthors, a Computer Science student at EPFL in
            Switzerland.
            <br />
            On this website, I bring together two of my passions: cooking and
            programming. So, whether you're here to whip up a delicious meal,
            dive into coding adventures, or simply connect with a fellow
            enthusiast, I hope you find something that sparks your curiosity and
            brings a smile to your face.
            <br />
            <br />
            Thank you for visiting!
          </p>
        </div>
        <img className="about-portrait" src={portrait.src} />
      </div>
      <CardGrid
        gridFormat={gridFormat}
        margin={margin}
        containerPadding={containerPadding}
        sizes={sizes}
      >
        {aboutSnippets.map((snippet: AboutSnippet) => (
          <div className="about-snippet" key={snippet.slug}>
            <div>{snippet.title}</div>
            <MDXContent code={snippet.body} />
          </div>
        ))}
      </CardGrid>
    </div>
  );
}

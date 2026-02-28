import FeaturedShowcase from "@/components/FeaturedShowcase";
import InfoBox from "@/components/InfoBox";
import { Post, posts, Recipe, recipes } from "@content";
import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import ArticleBlock from "@/components/ArticleBlock";
import { dateSort } from "@/utils/utils";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    url: "https://sidonie.me",
  },
};

export default function Home() {
  const featuredRecipes = recipes
    .filter((recipe: Recipe) => recipe.published && recipe.featured)
    .sort(dateSort)
    .slice(0, 4);

  const featuredPosts = posts
    .filter((post: Post) => post.published && post.featured)
    .sort(dateSort)
    .slice(0, 4);

  const gridFormat: [string, number, number, boolean][] = [
    ["l", 1000, 4, true],
    ["m", 500, 2, true],
    ["s", 200, 1, true],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [0, 0];

  return (
    <>
      <div className="home-hero">
        <Image
          className="home-hero-image"
          src="/home-hero.jpg"
          alt="Hero image"
          fill={true}
          priority={true}
          fetchPriority="high"
        />
        <h1>Welcome to my website!</h1>
        <div className="subtitle">Recipes, projects & more</div>
      </div>
      <div className="home-page">
        <div className="force-article">
          <InfoBox title="Note">
            <p>
              This is the new and improved version 2 of my website ! <br />I
              finally made the switch from plain old HTML/CSS/JS to using
              Next.js. This has allowed me to easily make this website a lot
              easier to manage: I can now add recipes and posts in simple MDX
              format, and they are formatted and added everywhere automatically.
            </p>
            <p>
              I{"'"}m still adding some functionalities but I transferred most
              of the original content already, and more will come !
            </p>
          </InfoBox>
        </div>
        <FeaturedShowcase title="Featured Recipes">
          <CardGrid
            gridFormat={gridFormat}
            margin={margin}
            containerPadding={containerPadding}
          >
            {featuredRecipes.map((recipe) => (
              <Card
                slug={recipe.slug}
                title={recipe.name}
                imageUrl={recipe.coverImage.src}
                key={recipe.slug}
              />
            ))}
          </CardGrid>
        </FeaturedShowcase>
        <FeaturedShowcase title="Featured Posts">
          <CardGrid
            gridFormat={gridFormat}
            margin={margin}
            containerPadding={containerPadding}
          >
            {featuredPosts.map((post: Post) => (
              <div className="article-block-card" key={post.slug}>
                <ArticleBlock
                  article={post}
                  disableTags={true}
                  fillSpace={true}
                  titleLevel={3}
                />
              </div>
            ))}
          </CardGrid>
        </FeaturedShowcase>
      </div>
    </>
  );
}

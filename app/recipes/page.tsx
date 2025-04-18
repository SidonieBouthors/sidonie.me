import CardGrid from "@components/CardGrid";
import Card from "@components/Card";
import { Recipe, recipes } from "@content";
import { Metadata } from "next";
import { dateSort } from "@utils/utils";

export const metadata: Metadata = {
  title: "Recipes",
  description: "My collection of recipes",
};

export default async function Recipes() {
  const displayRecipes = recipes
    .filter((recipe: Recipe) => recipe.published)
    .sort(dateSort);

  const gridFormat: [string, number, number][] = [
    ["xl", 1200, 4],
    ["l", 1000, 3],
    ["m", 450, 2],
    ["s", 200, 1],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [0, 0];

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>
      <CardGrid
        gridFormat={gridFormat}
        margin={margin}
        containerPadding={containerPadding}
      >
        {displayRecipes.map((recipe: Recipe) => (
          <Card
            slug={recipe.slug}
            title={recipe.name}
            imageUrl={recipe.coverImage.src}
            key={recipe.slug}
          />
        ))}
      </CardGrid>
    </div>
  );
}

import CardGrid from "@components/CardGrid";
import RecipeCard from "@components/RecipeCard";
import { promises as fs } from "fs";

export default async function Recipes() {
  const file = await fs.readFile(process.cwd() + "/data/recipes.json", "utf8");
  const recipes = JSON.parse(file);

  const gridFormat: [string, number, number][] = [
    ["xl", 1200, 4],
    ["l", 1000, 3],
    ["m", 400, 2],
    ["s", 200, 1],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [30, 30];

  return (
    <div>
      <h1>Recipes</h1>
      <CardGrid
        gridFormat={gridFormat}
        margin={margin}
        containerPadding={containerPadding}
      >
        {recipes.map((recipe: Recipe) => (
          <RecipeCard
            recipe={recipe}
          />
        ))}
      </CardGrid>
    </div>
  );
}

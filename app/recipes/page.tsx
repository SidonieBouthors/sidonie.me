import CardGrid from "@components/CardGrid";
import RecipeCard from "@components/RecipeCard";
import { promises as fs } from "fs";

type Recipe = {
  name: string;
  slug: string;
  imageURL: string;
  pageContentPath: string;
};

export default async function Recipes() {
  const file = await fs.readFile(process.cwd() + "/data/recipes.json", "utf8");
  const recipes = JSON.parse(file);

  return (
    <div>
      <h1>Recipes</h1>
      <CardGrid>
        {recipes.map((recipe: Recipe) => (
          <RecipeCard
            title={recipe.name}
            imageUrl={"/recipes/" + recipe.imageURL}
            altText={recipe.name}
          />
        ))}
      </CardGrid>
    </div>
  );
}

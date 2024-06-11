import { promises as fs } from "fs";

export default async function Recipe({ params }: { params: { recipeId: string } }) {
  const file = await fs.readFile(process.cwd() + "/data/recipes.json", "utf8");
  const recipes = JSON.parse(file);
  const recipe = recipes.find(
    (recipe: Recipe) => recipe.slug === params.recipeId
  );
  return <div>{recipe.name}</div>;
}

export async function generateStaticParams() {
  const file = await fs.readFile(process.cwd() + "/data/recipes.json", "utf8");
  const recipes = JSON.parse(file);

  const paths: { recipeId: string }[] = recipes.map((recipe: Recipe) => {
    const slug = recipe.slug;
    return {
      recipeId: slug,
    };
  });

  return paths;
}

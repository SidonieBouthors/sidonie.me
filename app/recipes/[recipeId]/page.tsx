import { MDXContent } from "@/components/MDXContent";
import { recipes, Recipe } from "@content";
import { notFound } from "next/navigation";

interface RecipeProps {
  params: {
    recipeId: string;
  };
}

export default async function RecipePage({ params }: RecipeProps) {
  // const file = await fs.readFile(
  //   process.cwd() + "/content/recipes.json",
  //   "utf8"
  // );
  // const recipes = JSON.parse(file);
  const recipe = recipes.find(
    (recipe: Recipe) => recipe.id === params.recipeId
  );

  if (!recipe || !recipe.published) {
    notFound();
  }

  return (
    <main>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <MDXContent code={recipe.body} />
    </main>
  );
}

export async function generateStaticParams() {
  return recipes.map((recipe: Recipe) => {
    const id = recipe.id;
    return {
      recipeId: id,
    };
  });
}

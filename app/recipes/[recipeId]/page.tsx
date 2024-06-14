import { MDXContent } from "@/components/MDXContent";
import RecipeInfo from "@components/RecipeInfo";
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
    (recipe: Recipe) => recipe.extractedSlug === params.recipeId
  );

  if (!recipe || !recipe.published) {
    notFound();
  }

  return (
    <main>
      <RecipeInfo
        recYield={recipe.yield}
        prepTime={recipe.prepTime || 0}
        cookTime={recipe.cookTime || 0}
        waitTime={recipe.waitTime || 0}
        totalTime={recipe.totalTime}
      ></RecipeInfo>
      <MDXContent code={recipe.body} />
    </main>
  );
}

export async function generateStaticParams() {
  return recipes.map((recipe: Recipe) => {
    const id = recipe.extractedSlug;
    return {
      recipeId: id,
    };
  });
}

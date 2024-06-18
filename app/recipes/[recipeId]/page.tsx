import Breadcrumb from "@components/Breadcrumb";
import LastUpdated from "@components/LastUpdated";
import { MDXContent } from "@components/MDXContent";
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
    <div className="recipe-page">
        <Breadcrumb
          title={recipe.name}
          slug={recipe.slug.split("/")}
        ></Breadcrumb>
        <LastUpdated date={recipe.date}></LastUpdated>
        <div className="recipe-pin-right">
          <RecipeInfo
            recYield={recipe.yield}
            prepTime={recipe.prepTime || 0}
            cookTime={recipe.cookTime || 0}
            waitTime={recipe.waitTime || 0}
            totalTime={recipe.totalTime}
          ></RecipeInfo>
          <img
            className="recipe-image"
            src={recipe.contentImage?.src}
            alt={recipe.name}
          />
        </div>
        <MDXContent code={recipe.body} />
    </div>
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

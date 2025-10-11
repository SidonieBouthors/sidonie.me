import Breadcrumb from "@components/Breadcrumb";
import LastUpdated from "@components/LastUpdated";
import { MDXContent } from "@components/MDXContent";
import RecipeInfo from "@components/RecipeInfo";
import { recipes, Recipe } from "@content";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata(props: RecipeProps) {
  const params = await props.params;
  const foundRecipe = recipes.find(
    (recipe: Recipe) => recipe.extractedSlug === params.recipeId
  );

  return {
    title: foundRecipe ? foundRecipe.name : "",
    description: foundRecipe ? foundRecipe.description : "",
  };
}

interface RecipeProps {
  params: Promise<{
    recipeId: string;
  }>;
}

export default async function RecipePage(props: RecipeProps) {
  const params = await props.params;
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

      <h1>{recipe.name}</h1>
      <div className="recipe-pin-right">
        <RecipeInfo
          recYieldUnit={recipe.yieldUnit || "servings"}
          recYield={recipe.yield}
          prepTime={recipe.prepTime || 0}
          cookTime={recipe.cookTime || 0}
          waitTime={recipe.waitTime || 0}
          totalTime={recipe.totalTime}
        ></RecipeInfo>
        <div className="recipe-image-container">
          <Image
            className="recipe-image"
            src={recipe.contentImage?.src ?? ""}
            alt={recipe.name}
            fill={true}
          />
        </div>
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

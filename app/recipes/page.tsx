import CardGrid from "@components/CardGrid";
import Card from "@components/Card";
import { Recipe, recipes } from "@content";

export default async function Recipes() {
  const displayRecipes = recipes
  .filter((recipe: Recipe) => recipe.published)
  .sort((a: Recipe, b: Recipe) => {
    var dateA = new Date(a.date).getTime()
    var dateB = new Date(b.date).getTime()
    return dateB - dateA;
  });

  const gridFormat: [string, number, number][] = [
    ["xl", 1200, 4],
    ["l", 1000, 3],
    ["m", 400, 2],
    ["s", 200, 1],
  ];
  const margin: [number, number] = [15, 15];
  const containerPadding: [number, number] = [15, 15];

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

import React from "react";
import "@styles/recipe-card.scss";
import Link from "next/link";

interface RecipeCardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

export default function RecipeCard({
  recipe
}: {recipe : Recipe}) {
  const imageUrl= "/recipes/" + recipe.imageURL
  const link = "/recipes/" + recipe.slug
  return (
    <>
      <figure className="rec-card" id="shoyu ramen">
        <img src={imageUrl} alt={recipe.name} />
        <figcaption className="rec-desc">
          <p className="rec-name">{recipe.name}</p>
          <Link
            href={link}
            className="rec-button"
          >
            Recipe
          </Link>
        </figcaption>
      </figure>
    </>
  );
}

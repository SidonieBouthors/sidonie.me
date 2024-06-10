import React from "react";
import "@styles/recipe-card.scss";

interface RecipeCardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

export default function RecipeCard({
  title,
  imageUrl,
  altText,
}: RecipeCardProps) {
  return (
    <>
      <figure className="rec-card" id="shoyu ramen">
        <img src={imageUrl} alt={altText} />
        <figcaption className="rec-desc">
          <p className="rec-name">{title}</p>
          <a
            href="recipe/shoyu-ramen"
            className="button button-accent button-small"
          >
            Recipe
          </a>
        </figcaption>
      </figure>
    </>
  );
}

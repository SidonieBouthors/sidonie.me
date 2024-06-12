import React from "react";
import "@styles/recipe-card.scss";
import Link from "next/link";
import { Recipe } from "@content";

interface CardProps {
  slug: string;
  title: string;
  imageUrl: string;
}

export default function Card({ slug, title, imageUrl }: CardProps) {
  return (
    <>
      <figure className="rec-card" id="shoyu ramen">
        <img src={imageUrl} alt={title} />
        <figcaption className="rec-desc">
          <p className="rec-name">{title}</p>
          <Link href={slug} className="rec-button">
            Recipe
          </Link>
        </figcaption>
      </figure>
    </>
  );
}
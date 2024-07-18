import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

interface CardProps {
  slug: string;
  title: string;
  imageUrl: string;
}

export default function Card({ slug, title, imageUrl }: CardProps) {
  return (
    <figure className="rec-card">
      <ExportedImage 
      src={imageUrl} 
      width={500}
      height={500}
      alt={title} />
      <figcaption className="rec-desc">
        <p className="rec-name">{title}</p>
        <Link href={slug} className="rec-button">
          Recipe
        </Link>
      </figcaption>
    </figure>
  );
}

"use client";

import CardGrid from "@components/CardGrid";
import RecipeCard from "@components/RecipeCard";
import image from "@public/recipes/illus-chickpea-curry.jpg";
import { useState } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Recipes() {
  return (
    <div>
      <h1>Recipes</h1>
      <CardGrid>
        {(Array.from({ length: 20 })).map((_, index) => (
          <RecipeCard key={index} title="Test Card" imageUrl={image.src} altText="" />
        ))}
      </CardGrid>
    </div>
  );
}

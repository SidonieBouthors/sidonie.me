"use client";

import RecipeCard from "@components/RecipeCard";
import image from "@public/recipes/illus-chickpea-curry.jpg";
import { useState } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Recipes() {
  var [rowHeight, setRowHeight] = useState(0);
  function onWidthChange(
    containerWidth: number,
    margin: [number, number],
    cols: number,
    containerPadding: [number, number]
  ) {
    // Padding default to margin if undefined
    // Margin defaults to 10 if undefined
    const defaultValue = 10;
    const marginTotal =
      margin == undefined ? defaultValue * (cols - 1) : margin[0] * (cols - 1);
    const paddingTotal =
      containerPadding == undefined
        ? margin == undefined
          ? defaultValue * 2
          : margin[0] * 2
        : containerPadding[0] * 2;
    const h = (containerWidth - marginTotal - paddingTotal) / cols;
    setRowHeight(h);
  }

  return (
    <div>
      <h1>Recipes</h1>
      <ResponsiveGridLayout
        className="layout"
        rowHeight={rowHeight}
        breakpoints={{ gg: 2 }}
        cols={{ gg: 4 }}
        onWidthChange={onWidthChange}
      >
        <div key="1" data-grid={{ x: 0, y: 0, w: 1, h: 1, static: true }}>
          <RecipeCard title="Test Card" imageUrl={image.src} altText="" />
        </div>
        <div key="2" data-grid={{ x: 1, y: 1, w: 1, h: 1, static: true }}>
          <RecipeCard title="Test Card" imageUrl={image.src} altText="" />
        </div>
        <div key="3" data-grid={{ x: 2, y: 0, w: 1, h: 1, static: true }}>
          <RecipeCard title="Test Card" imageUrl={image.src} altText="" />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

import Card from "./Card";
import CardGrid from "./CardGrid";

export default function FeaturedShowcase({
  title,
  seeMoreLink,
  children,
}: {
  title: string;
  seeMoreLink?: string;
  children: React.ReactElement;
}) {
  return (
    <section className="featured-showcase">
      <h2>{title}</h2>
      {/* TODO: Add see more link */ }
      {children}
    </section>
  );
}

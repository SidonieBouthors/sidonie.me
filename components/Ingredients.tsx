interface IngredientsProps {
  children: React.ReactNode;
}

export default function Ingredients({ children, ...props }: IngredientsProps) {
  return (
    <>
      <h2 id="ingredients">
        <a
          className="subheading-anchor"
          aria-label="Link to section"
          href="#ingredients"
        >
          Ingredients
        </a>
      </h2>
      <div className={`ingredients`} {...props}>
        {children}
      </div>
    </>
  );
}

interface InstructionsProps {
  children: React.ReactNode;
}

export default function Instructions({
  children,
  ...props
}: InstructionsProps) {
  return (
    <>
      <h2 id="instructions">
        <a
          className="subheading-anchor"
          aria-label="Link to section"
          href="#instructions"
        >
          Instructions
        </a>
      </h2>
      <div className={`instructions`} {...props}>
        {children}
      </div>
    </>
  );
}

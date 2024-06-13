interface CollapseProps {
  summary: string;
  children: React.ReactNode;
}

export default function Callout({
  summary,
  children,
  ...props
}: CollapseProps) {
  return (
    <details {...props}>
      <summary>
        <span>{summary}</span>
      </summary>
      <article className="details-content">{children}</article>
    </details>
  );
}

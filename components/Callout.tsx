interface CalloutProps {
  children: React.ReactNode;
  type: "note" | "tip" | "warning" | "error" | "example" | "hint";
  contentOnly?: boolean;
}

export default function Callout({
  children,
  type,
  contentOnly,
  ...props
}: CalloutProps) {
  var actualType: string = type;
  if (!["note", "tip", "warning", "error", "example", "hint"].includes(type)) {
    actualType = "content-only";
  } else if (contentOnly) {
    actualType += " content-only";
  }
  return (
    <div className={`callout ${actualType}`} {...props}>
      {children}
    </div>
  );
}

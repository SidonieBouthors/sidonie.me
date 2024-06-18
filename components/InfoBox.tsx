interface InfoBoxProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

export default function InfoBox({
  children,
  title,
  className,
  ...props
}: InfoBoxProps) {
  
  return (
    <div className={`info-box ${className || ""}`} {...props}>
      {title ? <div className="info-box-title">{title}</div> : null}
      {children}
    </div>
  );
}

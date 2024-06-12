
interface CalloutProps {
    children: React.ReactNode;
    type: 'note' | 'tip' | 'warning';
}

export default function Callout({ children, type, ...props }: CalloutProps) {
  return (
    <div className={`recipe-info-box ${type}`} {...props}>
      {children}
    </div>
  );
}

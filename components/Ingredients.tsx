interface IngredientsProps {
    children: React.ReactNode;
  }
  
  export default function Ingredients({
    children,
    ...props
  }: IngredientsProps) {
    
    return (
      <div className={`ingredients`} {...props}>
        {children}
      </div>
    );
  }
  
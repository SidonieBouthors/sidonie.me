
interface RecipeInfoBoxProps {
    children: React.ReactNode;
    type: 'default' | 'ingredients' | 'info' | 'tips';
}

export default function RecipeInfoBox({ children, type, ...props }: RecipeInfoBoxProps) {
  return (
    <div className={`recipe-info-box ${type}`} {...props}>
      {children}
    </div>
  );
}

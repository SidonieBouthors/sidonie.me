interface InstructionsProps {
    children: React.ReactNode;
  }
  
  export default function Instructions({
    children,
    ...props
  }: InstructionsProps) {
    
    return (
      <div className={`instructions`} {...props}>
        {children}
      </div>
    );
  }
  
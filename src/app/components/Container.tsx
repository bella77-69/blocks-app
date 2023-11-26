type ContainerProps = {
    children: React.ReactNode;
  };
  
  export default function Container({ children }: ContainerProps) {
    return (
      <div className="container mx-auto bg-[#f6f6f6]">{children}</div>
    );
  }
  
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card = ({ children, className, hover = false, gradient = false }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-card",
        gradient && "bg-gradient-card",
        hover && "hover:shadow-elegant hover:scale-105 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
};

const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
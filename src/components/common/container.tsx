import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "container mx-auto max-w-4xl px-4 animate-fade-in-blur border",
        className
      )}
    >
      {children}
    </div>
  );
};

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
        "animate-fade-in-blur min-h-screen container mx-auto w-full max-w-4xl border bg-white  dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};

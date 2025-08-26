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
        "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

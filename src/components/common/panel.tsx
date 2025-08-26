import { cn } from "@/lib/utils";

export const Panel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return(
     <section className={cn("rounded-2xl border p-6 bg-white dark:bg-zinc-900 shadow-sm", className)}>{children}</section>
  );
};

export const PanelHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-4 border-b pb-2", className)}>{children}</div>;
};

export const PanelTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h2 className={cn("text-lg font-semibold tracking-tight", className)}>{children}</h2>;
};

export const PanelContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mt-4", className)}>{children}</div>;
};

import { cn } from "@/lib/utils";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={cn(
          "h-16 w-16 animate-spin rounded-full border-4 border-solid border-t-purple-500",
          className,
        )}
      />
    </div>
  );
};
export default Loading;

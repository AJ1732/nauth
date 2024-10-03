import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string | number;
}

const RotateGradientCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "text-primary-100 before:animate-rotation before:bg-gradient after:animate-rotation after:bg-gradient relative h-full min-h-10 rounded-lg bg-zinc-900 px-4 py-3 before:absolute before:-inset-[1px] before:-z-10 before:rounded-lg after:absolute after:-inset-[1px] after:-z-10 after:rounded-lg after:blur-[3.5rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};
export default RotateGradientCard;

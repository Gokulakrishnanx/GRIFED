"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const AuroraText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-b from-white/80 to-white bg-clip-text text-transparent",
        "animate-aurora-text relative inline-block",
        "after:absolute after:inset-0 after:bg-gradient-to-b after:from-blue-500/40 after:to-purple-500/40 after:content-[''] after:filter after:blur-xl after:-z-10",
        className
      )}
    >
      {children}
    </span>
  );
}; 
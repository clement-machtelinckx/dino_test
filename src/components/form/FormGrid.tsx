import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  cols?: 1 | 2 | 3;
  gap?: "sm" | "md" | "lg";
  className?: string;
};

const gapMap: Record<NonNullable<Props["gap"]>, string> = {
  sm: "gap--sm",
  md: "gap--md",
  lg: "gap--lg",
};

export function FormGrid({ children, cols = 2, gap = "md", className }: Props) {
  const colsClass =
    cols === 1 ? "col--12" : cols === 2 ? "col--6" : "col--4";

  // On utilise la grille Infima (row + col)
  // Chaque enfant devient une colonne.
  return (
    <div className={clsx("row", gapMap[gap], className)}>
      {React.Children.map(children, (child, idx) => (
        <div key={idx} className={clsx("col", colsClass)}>
          {child}
        </div>
      ))}
    </div>
  );
}

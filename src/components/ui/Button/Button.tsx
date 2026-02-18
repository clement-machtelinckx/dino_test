import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
}) {
    const variantClass =
        variant === "primary"
            ? "button button--primary"
            : variant === "secondary"
                ? "button button--secondary"
                : "button button--outline button--primary";

    const sizeClass =
        size === "sm" ? "button--sm" : size === "lg" ? "button--lg" : undefined;

    return (
        <button className={clsx(variantClass, sizeClass, className)} {...props}>
            {children}
        </button>
    );
}

import React from "react";
import clsx from "clsx";
import styles from "./featureGrid.module.css";

export function FeatureGrid({
    children,
    cols = 3,
    className,
}: {
    children: React.ReactNode;
    cols?: 2 | 3 | 4;
    className?: string;
}) {
    return (
        <div
            className={clsx(styles.grid, className)}
            data-cols={cols}
        >
            {children}
        </div>
    );
}

export function FeatureGridItem({ children }: { children: React.ReactNode }) {
    return <div className={styles.item}>{children}</div>;
}

import React from "react";
import clsx from "clsx";
import styles from "./cardLeftIcon.module.css";

export function CardLeftIcon({
    icon,
    title,
    children,
    className,
}: {
    icon: React.ReactNode;
    title: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={clsx(styles.wrap, className)}>
            <div className={styles.iconBox} aria-hidden="true">
                {icon}
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.body}>{children}</div>
            </div>
        </div>
    );
}

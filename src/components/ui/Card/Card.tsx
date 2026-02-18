import React from "react";
import clsx from "clsx";
import styles from "./card.module.css";

export function Card({
    title,
    children,
    className,
    topIcon,
}: {
    title?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    topIcon?: React.ReactNode;
}) {
    return (
        <div className={clsx("card", styles.mkCard, className)}>
            <div className={styles.top}>
                {topIcon ? <div className={styles.icon}>{topIcon}</div> : null}
            </div>

            {title ? (
                <div className="card__header">
                    <h3 className={styles.title}>{title}</h3>
                </div>
            ) : null}

            <div className="card__body">{children}</div>
        </div>
    );
}

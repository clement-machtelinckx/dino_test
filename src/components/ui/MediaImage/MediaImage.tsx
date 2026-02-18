import React from "react";
import clsx from "clsx";
import styles from "./mediaImage.module.css";

type Ratio = "1:1" | "4:3" | "16:9";

export function MediaImage({
    src,
    alt,
    ratio = "1:1",
    className,
}: {
    src: string;
    alt: string;
    ratio?: Ratio;
    className?: string;
}) {
    return (
        <figure className={clsx(styles.wrap, styles[ratio.replace(":", "_")], className)}>
            <img className={styles.img} src={src} alt={alt} loading="lazy" />
        </figure>
    );
}

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { Icon } from "@mdi/react";

import styles from "./cardContact.module.css";

type Props = {
    title: string;
    iconPath: string;
    href: string; // tel: mailto: ou https:
    buttonLabel: string;
    className?: string;
};

export function CardContact({
    title,
    iconPath,
    href,
    buttonLabel,
    className,
}: Props): JSX.Element {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.iconWrap} aria-hidden="true">
                <Icon path={iconPath} size={1.15} />
            </div>

            <div className={styles.title}>{title}</div>

            {/* Le clic principal est sur le bouton (comme la maquette) */}
            <div className={styles.cta}>
                <Link
                    className={clsx("mkBtn", styles.btn)}
                    to={isExternal ? undefined : href}
                    href={isExternal ? href : undefined}
                >
                    {buttonLabel} <span className="mkBtnArrow" aria-hidden="true">→</span>
                </Link>
            </div>
        </div>
    );
}

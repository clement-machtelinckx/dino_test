import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

type FooterLink = { label: string; to: string } | { label: string; href: string };

function FooterLinks({ links }: { links: FooterLink[] }) {
  return (
    <ul className={styles.links}>
      {links.map((l) => {
        if ("href" in l) {
          return (
            <li key={`${l.label}-${l.href}`}>
              <a className={styles.link} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          );
        }
        return (
          <li key={`${l.label}-${l.to}`}>
            <Link className={styles.link} to={l.to}>
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const year = new Date().getFullYear();

  const legalLinks: FooterLink[] = [
    { label: "Mentions légales et médiateur", to: "/legal/mentions-legales" },
    { label: "Politique cookie", to: "/legal/politique-cookie" },
    { label: "Politique de confidentialité", to: "/legal/politique-de-confidentialite" },
  ];

  const contactLinks: FooterLink[] = [
    { label: "TEL Service gestion", href: "tel:0320000000" },
    { label: "TEL Service commercial", href: "tel:0320000001" },
    { label: "Mail du cabinet", href: "mailto:contact@markassur.fr" },
  ];

  const menuLinks: FooterLink[] = [
    { label: "Accueil", to: "/" },
    { label: "Solution", to: "/solution" },
    { label: "Devenir partenaire", to: "/partenaire" },
    { label: "Notre réseau", to: "/reseau" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.inner)}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandLink}>
              <img className={styles.logo} src="/img/logo.svg" alt={siteConfig.title} loading="lazy" />
              <div>
                <div className={styles.brandName}>{siteConfig.title}</div>
                <div className={styles.tagline}>{siteConfig.tagline}</div>
              </div>
            </Link>

            <div className={styles.cta}>
              <Link className="button button--primary button--md" to="/contact">
                Nous contacter
              </Link>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Cabinet</div>
            <FooterLinks links={legalLinks} />
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Contact</div>
            <FooterLinks links={contactLinks} />
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Menu</div>
            <FooterLinks links={menuLinks} />
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            Copyright © {year} {siteConfig.title}.
          </div>
          <div className={styles.bottomLinks}>
            <Link className={styles.bottomLink} to="/legal/politique-de-confidentialite">
              Confidentialité
            </Link>
            <span className={styles.sep} aria-hidden="true">•</span>
            <Link className={styles.bottomLink} to="/legal/politique-cookie">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

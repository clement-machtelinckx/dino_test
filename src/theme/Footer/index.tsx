import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type CabinetFooterCol = {
  name: string;
  orias: string;
  description: string;
  accent: "blue" | "white" | "yellow";
  linkTo: string;
  linkLabel: string;
};

const COLS: CabinetFooterCol[] = [
  {
    name: "Eurossur",
    orias: "n° ORIAS 07001927- www.orias.fr",
    description:
      "Cabinet de courtage expert de l'assurance des appareils auditifs depuis 1999. Service sinistre 100% en France, certifié par les assureurs.",
    accent: "blue",
    linkTo: "/legal/mentions-legales",
    linkLabel: "Mentions légales et médiateur",
  },
  {
    name: "Mark'assur",
    orias: "n° ORIAS 09-049-435 (www.orias.fr)",
    description:
      "Créé en 2009, Mark’assur est un courtier spécialiste dans la protection de l’aide auditive et de l’audioprothésiste.",
    accent: "white",
    linkTo: "/legal/mentions-legales",
    linkLabel: "Mentions légales et médiateur",
  },
  {
    name: "Rossard Courtage",
    orias: "",
    description:
      "Rossard Courtage est un cabinet de courtage en assurance pour les entreprises et les professionnels créé en 2001. Entreprise familiale et à l’écoute de ses clients, Rossard Courtage s’engage de leur apporter la meilleure offre et à toujours défendre leurs intérêts auprès des compagnies d’assurances partenaires.",
    accent: "yellow",
    linkTo: "/legal/mentions-legales",
    linkLabel: "Mentions légales et médiateur",
  },
];

function AccentClass(accent: CabinetFooterCol["accent"]) {
  if (accent === "blue") return styles.accentBlue;
  if (accent === "yellow") return styles.accentYellow;
  return styles.accentWhite;
}

export default function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {COLS.map((col) => (
            <div key={col.name} className={styles.col}>
              <div className={styles.title}>
                <span className={styles.titlePrefix}>Cabinet</span>{" "}
                <span className={styles.titleName}>{col.name}</span>
              </div>

              {col.orias ? <div className={styles.orias}>{col.orias}</div> : <div className={styles.oriasSpacer} />}

              <p className={styles.desc}>{col.description}</p>

              <div className={styles.linkRow}>
                <Link className={`${styles.legalLink} ${AccentClass(col.accent)}`} to={col.linkTo}>
                  {col.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

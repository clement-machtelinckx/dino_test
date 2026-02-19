import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { CardCarousel } from "../components/ui/Carousel/CardCarousel";
import { MediaImage } from "../components/ui/MediaImage/MediaImage";
import { FeatureGrid, FeatureGridItem } from "../components/ui/FeatureGrid/FeatureGrid";


import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title}>
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={clsx("container", styles.container)}>
            <div className={styles.center}>
              <div className={styles.logoWrap}>
                <img className={styles.logo} src="/img/logo.svg" alt={siteConfig.title} loading="eager" />
              </div>

              <div className={styles.rule} />

              <div className={styles.distrib}>
                Distribué par{" "}
                <span className={styles.distribStrong}>
                  Eurossur, Mark&apos;assur &amp; Rossard
                </span>
              </div>

              <h1 className={styles.h1}>Experts</h1>
              <div className={styles.h2}>de la</div>
              <h2 className={styles.h3}>protection des audioprothésistes</h2>

              <div className={styles.textBox}>
                <p className={styles.p}>
                  Depuis plus de 35 ans, nous accompagnons les professionnels du
                  secteur de l’audioprothèse dans la protection et la sécurisation
                  de leur activité. Nous développons également des solutions
                  d’assurance spécifiquement dédiées aux dispositifs auditifs.
                </p>

                <p className={styles.p}>
                  Protec’audio propose des solutions d’assurance dédiées aux
                  audioprothésistes, conçues pour couvrir les risques liés à leur
                  exercice : responsabilité civile professionnelle, locaux,
                  équipements et continuité d’activité.
                </p>

                <p className={styles.pStrong}>
                  Notre engagement : vous offrir une protection fiable, adaptée à
                  votre métier et à ses exigences spécifiques.
                </p>
              </div>

              <div className={styles.ctaRow}>
                <Link className="mkBtn" to="/contact">
                  Demander un devis <span className="mkBtnArrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 BLOCS */}
        <section className="mkSection">
          <div className="container">
            <h2 className="mkTitle">Protégez votre activité professionnelle</h2>

            {/* Bloc 1 */}
            <div className={styles.block}>
              <div className={styles.blockGrid}>
                <div className={styles.blockText}>
                  <p className="mkText">
                    Nous vous accompagnons dans la protection globale de votre
                    activité d’audioprothésiste, en prenant en considération les
                    spécificités liées a la gestion de vos cabinets, de vos équipes et
                    de vos partenaires professionnels.
                  </p>

                  <p className="mkText">
                    Grâce à notre double expertise en assurance de personne et
                    assurance dommage, nous analysons vos risques afin de
                    sécuriser votre responsabilité professionnelle, vos locaux, votre
                    matériel, et pour offrir à vos équipes une protection optimale.
                  </p>

                  <p className="mkText">
                    Notre approche vous permet de garantir la continuité de votre
                    activité tout en maitrisant durablement votre budget d’assurance.
                  </p>

                  <div className={styles.blockCta}>
                    <Link className="mkBtn" to="/contact">
                      Demande d&apos;informations <span className="mkBtnArrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.blockMedia}>
                  <MediaImage
                    className={styles.diagram}
                    src="/img/man_doctor_img.png"
                    alt="Schéma protection activité"
                    ratio="1:1"
                  />
                </div>
              </div>
            </div>

            {/* Bloc 2 */}
            <div className={styles.block}>
              <div className={clsx(styles.blockGrid, styles.blockGridReverse)}>
                <div className={styles.blockMedia}>
                  <MediaImage
                    className={styles.diagram}
                    src="/img/ear_img.png"
                    alt="Schéma dispositifs auditifs"
                    ratio="1:1"
                  />
                </div>

                <div className={styles.blockText}>
                  <h3 className="mkTitle">
                    Protégez vos patients et les dispositifs auditifs
                  </h3>

                  <p className="mkText">
                    L’audioprothésiste a une responsabilité directe envers ses
                    patients, tant sur la qualité de l’appareillage que sur la
                    sécurité, le suivi et la continuité de prise en charge.
                  </p>

                  <p className="mkText">
                    Nous vous proposons des solutions spécifiquement conçues
                    pour protéger les dispositifs auditifs délivrés et sécuriser la
                    relation de confiance entre vous et vos patients.
                  </p>

                  <p className="mkText">
                    Nos garanties permettent de faire face aux imprévus tout en
                    assurant un accompagnement rapide et efficace, dans le
                    respect des obligations professionnelles et réglementaires.
                  </p>

                  <div className={styles.blockCta}>
                    <Link className="mkBtn" to="/contact">
                      Demande d&apos;informations <span className="mkBtnArrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <div className="container margin-top--lg">
          <CardCarousel
            className="margin-top--lg"
            items={[
              { key: "1", content: <img src="/img/logo.svg" alt="Slide 1" /> },
              { key: "2", content: <img src="/img/logo.svg" alt="Slide 2" /> },
              { key: "3", content: <img src="/img/logo.svg" alt="Slide 3" /> },
              { key: "4", content: <img src="/img/logo.svg" alt="Slide 4" /> },
              { key: "5", content: <img src="/img/logo.svg" alt="Slide 5" /> },
              { key: "6", content: <img src="/img/logo.svg" alt="Slide 6" /> },

            ]}
          />

        </div>

        <div className="container margin-top--lg">
          <h1>Notre Accompagnement</h1>
          <FeatureGrid cols={3} className="margin-top--lg">
            <FeatureGridItem>
              <h3>Assistance Et Support</h3>
              <p>Une équipe dédiée pour accompagner et assister les audioprothésistes pour tous leur besoin en matière d’assurance.</p>
            </FeatureGridItem>
            <FeatureGridItem>
              <h3>Zéro Papier, Tout Se Fait En Ligne</h3>
              <p>La souscription et gestion de vos solutions d’assurances sont rapides, intuitives  et sécurisées.</p>
            </FeatureGridItem>
            <FeatureGridItem>
              <h3>Assurance Sur-Mesure</h3>
              <p>Une capacité unique à construire des solutions et des programmes simples et cohérents.</p>
            </FeatureGridItem>
          </FeatureGrid>
        </div>
      </main>
    </Layout >
  );
}

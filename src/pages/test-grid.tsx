import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Icon } from "@mdi/react";
import {
    mdiFileDocumentOutline,
    mdiShieldOutline,
    mdiScaleBalance,
    mdiHeartPlusOutline,
    mdiPiggyBankOutline,
} from "@mdi/js";

import { FeatureGrid, FeatureGridItem } from "../components/ui/FeatureGrid/FeatureGrid";

import styles from "./protection.module.css";

type GuaranteeBlock = {
    icon: string;
    title: string;
    pills: string[];
};

const BLOCKS: GuaranteeBlock[] = [
    {
        icon: mdiFileDocumentOutline,
        title: "Responsabilité Civile Professionnelle",
        pills: ["RC Professionnelle", "RC médicale incluse", "Biens confiés couverts", "Défense pénale", "Garanties modulables"],
    },
    {
        icon: mdiShieldOutline,
        title: "Multirisque Professionnel",
        pills: ["Locaux protégés", "Matériel couvert", "Vol & vandalisme", "Dégâts des eaux", "Perte d’exploitation"],
    },
    {
        icon: mdiScaleBalance,
        title: "Protection Juridique",
        pills: ["Assistance juridique", "Défense en cas de litige", "Frais de procédure", "Protection contractuelle", "Sécurité réglementaire"],
    },
    {
        icon: mdiHeartPlusOutline,
        title: "Santé & Prévoyance",
        pills: ["Santé individuelle & collective", "Prévoyance individuelle & collective"],
    },
    {
        icon: mdiPiggyBankOutline,
        title: "Épargne & Retraite",
        pills: ["Préparation retraite", "Optimisation fiscale", "Épargne long terme", "Sécurisation du patrimoine"],
    },
];

function GuaranteeSection(): JSX.Element {
    return (
        <section className="mkSectionTight">
            <div className="container">
                <h1 className={clsx("mkH1", styles.pageTitle)}>Découvrez nos garanties</h1>

                <div className={styles.blocks}>
                    {BLOCKS.map((b) => (
                        <div key={b.title} className={styles.block}>
                            <div className={styles.blockBar}>
                                <span className={styles.blockIcon} aria-hidden="true">
                                    <Icon path={b.icon} size={1} />
                                </span>
                                <span className={styles.blockTitle}>{b.title}</span>
                            </div>

                            <div className={styles.pills}>
                                {b.pills.map((p) => (
                                    <span key={`${b.title}-${p}`} className={styles.pill}>
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaRow}>
                    <Link className="mkBtn" to="/contact">
                        Demande d&apos;informations <span className="mkBtnArrow" aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function WhyUsSection(): JSX.Element {
    return (
        <section className="mkSection">
            <div className="container">
                <h2 className={clsx("mkTitle", "mkTitleCenter")}>Pourquoi nous choisir ?</h2>

                <div className={styles.whyCard}>
                    <FeatureGrid cols={2} className="margin-top--sm">
                        <FeatureGridItem>
                            <h3>Une équipe d’experts engagés</h3>
                            <p>
                                Notre équipe est stable, se forme régulièrement et est surtout fière du taux de satisfaction de nos clients.
                                La confiance, c’est notre engagement de tous les instants.
                            </p>
                        </FeatureGridItem>

                        <FeatureGridItem>
                            <h3>Une des offres les plus larges du marché</h3>
                            <p>
                                Nous travaillons avec plus de 20 partenaires assureurs, garantissant une véritable démarche de conseil,
                                transparente, à l’écoute et forcément avec une solution.
                            </p>
                        </FeatureGridItem>
                    </FeatureGrid>

                    <FeatureGrid cols={2} className="margin-top--sm">
                        <FeatureGridItem>
                            <h3>Suivi et qualité</h3>
                            <p>
                                Répondre généralement sous 48H à toutes vos demandes est notre engagement.
                                En cas de sinistre, notre service dédié 100% en France vous accompagne pas à pas jusqu’à l’indemnisation.
                            </p>
                        </FeatureGridItem>

                        <FeatureGridItem>
                            <h3>Un accompagnement sur-mesure</h3>
                            <p>
                                Parce que chaque situation est spécifique, nos chargés de clientèle prennent soin de comprendre vos besoins et
                                préoccupations pour vous proposer les garanties les mieux adaptées.{" "}
                                <b>Nous pouvons faire évoluer votre contrat</b> grâce aux points de situation que nous vous proposerons régulièrement.
                            </p>
                        </FeatureGridItem>
                    </FeatureGrid>
                </div>
            </div>
        </section>
    );
}

export default function Protection(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title={`Protection | ${siteConfig.title}`}>
            <main>
                <GuaranteeSection />
                <WhyUsSection />
            </main>
        </Layout>
    );
}

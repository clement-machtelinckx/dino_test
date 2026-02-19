

import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { mdiSkull } from "@mdi/js";
import { Icon } from "@mdi/react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { FeatureGrid, FeatureGridItem } from "../components/ui/FeatureGrid/FeatureGrid";

import styles from "./index.module.css";

export default function TestGrid(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title}>
            <main className="container margin-vert--lg">
                <section>
                    <Icon path={mdiSkull} size={1}></Icon>
                    <h1 className="h1">Découvrez nos garanties</h1>
                    <div>
                        <h1>Responsabilité Civile Professionnelle</h1>
                        <h3>RC Professionnelle</h3>
                        <h3>Rc Médicale incluse</h3>
                        <h3>Bien confié couverts</h3>
                        <h3>Defense pénale</h3>
                        <h3>Garanties modulables</h3>
                    </div>
                    <div>
                        <h1>Multirisque Professionnel</h1>
                        <h3>Loccaux protégés</h3>
                        <h3>Matériel couvert</h3>
                        <h3>Vol & vandalisme</h3>
                        <h3>Dégâts des eaux</h3>
                        <h3>Perte d'exploitation</h3>
                    </div>
                    <div>
                        <h1>Protection Juridique</h1>
                        <h3>Assistance juridique</h3>
                        <h3>Defense en cas de litige</h3>
                        <h3>Frais de procédure</h3>
                        <h3>Protection contractuelle</h3>
                        <h3>Sécurité reglementaire</h3>
                    </div>
                    <div>
                        <h1>Santé & Prévoyance</h1>
                        <h3>Santé individuelle & collective</h3>
                        <h3>Prévoyance individuelle et collective</h3>

                    </div>
                    <div>
                        <h1>Epargne & Retraite</h1>
                        <h3>Péparation retraite</h3>
                        <h3>Optimisation fiscale</h3>
                        <h3>epargne Long terme</h3>
                        <h3>Sécurisation du patrimoine</h3>
                    </div>
                </section>
                <section>
                    <h1>Pourquoi nous choisir ?</h1>
                    <FeatureGrid cols={2} className="margin-top--sm">

                        <FeatureGridItem>
                            <h3>Une Equipe d'experts Engagés</h3>
                            <p>
                                Notre équipe est stable, se forme réguliermetn et est surtout fière du taux de satisfaction de nos clients.
                                La confiance, c'est notre engagement de tout les instants.
                            </p>
                        </FeatureGridItem>

                        <FeatureGridItem>
                            <h3>Une Des Offre Les Plus Larges DU Marché</h3>
                            <p>
                                Nous travaillons avec plus de 20 partenaires assureurs, garantissant une véritable démarche de conseil, transparent, à l'écoute et
                                forcement avec une solution.
                            </p>
                        </FeatureGridItem>
                    </FeatureGrid>
                    <FeatureGrid cols={2} className="margin-top--sm">

                        <FeatureGridItem>
                            <h3>Suivit Et Qualité</h3>
                            <p>
                                Répondre généralemetn sous 48H à toutes vos demandes est notre engagement.
                                En cas de sinistres notre service dédié 100% en France vous accompagnera pas à pas jusqu'à l'indemnisation.
                            </p>
                        </FeatureGridItem>

                        <FeatureGridItem>
                            <h3>Un Accompagnement Sur-Mesure</h3>
                            <p>
                                Parce que chaque situation est spécifique, nos chargés de clientèle prendront soin de comprendre vos besoin et
                                préoccupations pour vous proposer les garanties les mieux adaptées.
                                <b>Nous serons en capacité de faire évoluer votre contract</b> grâce au point de situation que nous vous proposeront régulièrement.
                            </p>
                        </FeatureGridItem>
                    </FeatureGrid>
                </section>
            </main>

        </Layout>
    )
}
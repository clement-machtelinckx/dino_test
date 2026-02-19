import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { mdiSkull } from "@mdi/js";
import { Icon } from "@mdi/react";
import { CardLeftIcon } from "../components/ui/CardLeftIcon/CardLeftIcon";
import { FeatureGrid, FeatureGridItem } from "../components/ui/FeatureGrid/FeatureGrid";
import { Carousel } from "../components/ui/Carousel/Carousel";
import { CardCarousel } from "../components/ui/Carousel/CardCarousel";

export default function Partenaire(): ReactNode {
    return (
        <Layout title="Devenir partenaire">
            <main className="container margin-vert--lg">
                <h1>Avec Mark'assur, bénéficiez de notre expérience</h1>

                <FeatureGrid cols={2} className="margin-top--sm">
                    <FeatureGridItem >
                        <CardLeftIcon
                            title="Une expertise unique"
                            icon={<Icon path={mdiSkull} size={1} />}
                        >
                            <p>
                                Mark’assur est le seul courtier en assurance <b>exclusivement</b> dédié aux aides
                                auditives et leurs accessoires. Avec plus de 15 ans d’expérience, le cabinet
                                couvre les risques de <b>perte</b>, <b>vol</b>, <b>casse</b>.
                            </p>
                        </CardLeftIcon>
                    </FeatureGridItem>
                    <FeatureGridItem >
                        <CardLeftIcon
                            title="Un soutien et une gestion optimisée"
                            icon={<Icon path={mdiSkull} size={1} />}
                        >
                            <p>
                                Mark'assur accompagne ses partenaires et gère plus de <b>5000 dossiers</b> par an.
                                Cela garantit un traitement rapide et professionnel des sinistres, avec des
                                délais d'indemnisation optimisés.
                            </p>
                        </CardLeftIcon>
                    </FeatureGridItem>
                </FeatureGrid>
                <FeatureGrid cols={2} className="margin-top--sm">
                    <FeatureGridItem>
                        <CardLeftIcon
                            title="Un service simplifié et accessible"
                            icon={<Icon path={mdiSkull} size={1} />}
                        >
                            <p>
                                Mark'assur offre des programmes d'assurance pour appareils auditifs qui se distinguent par leur simplicité,
                                <b>leur accessibilité financière renforçant la relation de confiance</b> entre le laboratoire et ses patients. Ces
                                caractéristiques permettent aux audioprothésistes de présenter à leurs patients des solutions d'assurance transparentes et adaptées.
                            </p>
                        </CardLeftIcon>
                    </FeatureGridItem>
                    <FeatureGridItem >
                        <CardLeftIcon
                            title="Fidélisation et différenciation sur le marché​"
                            icon={<Icon path={mdiSkull} size={1} />}
                        >
                            <p>
                                Offrir une protection complète à travers Mark'assur permet aux audioprothésistes de <b>se
                                    distinguer de la concurrence</b> en proposant un service premium. Cela améliore l'expérience
                                client, sécurise l'investissement des patients et favorise leur fidélité à long terme.
                            </p>
                        </CardLeftIcon>
                    </FeatureGridItem>
                </FeatureGrid>
                <FeatureGrid cols={2} className="margin-top--sm">
                    <FeatureGridItem >
                        <CardLeftIcon
                            title="Une souscription en ligne rapide et simplifiée"
                            icon={<Icon path={mdiSkull} size={1} />}
                        >
                            <p>
                                Entièrement intégrée aux logiciels métiers, elle facilite l'enregistrement et la
                                gestion des contrats. Cette approche numérique <b>optimise le temps des audioprothésistes</b>
                                tout en offrant un service de qualité à leurs clients
                            </p>
                        </CardLeftIcon>
                    </FeatureGridItem>
                    <FeatureGridItem >
                        <CardLeftIcon
                            title="Une formation et un accompagnement"
                            icon={<Icon path={mdiSkull} size={1} />}
                        >
                            <p>
                                L'équipe est au coté des laboratoires, et propose <b>un accompagnement personnalisé.</b>
                                Dès l'intégration en tant que partenaire, les audioprothésistes profitent d'une formation
                                pointue et d'échanges réguliers.
                            </p>
                        </CardLeftIcon>
                    </FeatureGridItem>
                </FeatureGrid>
                <div>
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
            </main>
        </Layout>
    );
}
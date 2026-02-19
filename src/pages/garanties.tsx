import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Icon from '@mdi/react';
import { MediaImage } from "../components/ui/MediaImage/MediaImage";
import { mdiSkull } from '@mdi/js';
import { Card } from "../components/ui/Card/Card";
import Link from "@docusaurus/Link";
import { FeatureGrid, FeatureGridItem } from "../components/ui/FeatureGrid/FeatureGrid";

export default function Garanties(): ReactNode {
    return (
        <Layout title="Nos garanties">
            <main className="container margin-vert--lg">
                <section>
                    <FeatureGrid cols={2}>

                        <FeatureGridItem>
                            <div>
                                <h1>Assurance appareil auditif</h1>
                                <p>Audioprothésistes, sécurisez chaque appareillage proposez avias patiens une sérénité totale.
                                    Assurance Perte, Vol, Casse
                                </p>
                                <Link to="/contact" className="mkBtn mkBtn--primary">Prendre RDV</Link>
                            </div>
                        </FeatureGridItem>

                        <FeatureGridItem>
                            <MediaImage
                                src="/img/femme_appareil.png"
                                alt="Appareil auditif"
                                ratio="1:1"
                            />
                        </FeatureGridItem>
                    </FeatureGrid>
                </section>
                <div className="margin-bottom--lg">
                    <h1>Nos garanties</h1>
                    <p>
                        En proposant nos solutions, les audioprothésistes offrent à leurs
                        patients une tranquillité d’esprit. Des couvertures indispensables,
                        efficaces et totalement adaptées à la protection des appareillages.
                    </p>
                </div>
                <FeatureGrid cols={3}>
                    <FeatureGridItem >
                        <Card title="GARANTIE PERTE"
                            topIcon={< Icon path={mdiSkull} />}
                        >
                            <p>
                                Cette couverture est pertinente pour des appareils de petite taille,
                                elle offre la possibilité de remplacer le dispositif égaré en l’absence
                                d’une participation des dispositifs des régimes obligatoires et mutuelles.*
                            </p>

                        </Card>
                    </FeatureGridItem>

                    <FeatureGridItem>
                        <Card title="GARANTIE VOL"
                            topIcon={< Icon path={mdiSkull} />}
                        >
                            <p>
                                La garantie vol protège l'assuré contre la soustraction frauduleuse de
                                son audioprothèse. Elle entre en jeu lorsque l'appareil est dérobé, que
                                ce soit par effraction, agression ou à l'insu de son propriétaire.*
                            </p>

                        </Card>
                    </FeatureGridItem>

                    <FeatureGridItem >
                        <Card title="GARANTIE CASSE"
                            topIcon={< Icon path={mdiSkull} />}
                        >
                            <p>
                                La garantie casse couvre les dégâts matériels subis par l'audioprothèse
                                suite à un évènement soudain et imprévu. Cette protection assure la réparation
                                ou le remplacement de l'appareil endommagé, permettant ainsi à l'assuré de
                                retrouver rapidement l'usage de son dispositif auditif.*
                            </p>

                        </Card>
                    </FeatureGridItem>
                </FeatureGrid>
                <div className="mkRow margin-top--lg">
                    <p className="text--center margin-top--sm" style={{ margin: 0 }}>
                        * Sous réserve des conditions spécifiques énoncées dans le contrat d'assurance.
                    </p>

                    <Link className="mkBtn mkBtn--primary" to="/contact">
                        Voir les détails
                    </Link>
                </div>

                <div className="row row--align-center margin-top--xl">
                    <div className="col col--6">
                        <h1>Les appareils assurés</h1>
                        <p>
                            Les audioprothèses Classe 1 ou 2 sont couverts pendant 4 ans. Les
                            accessoires système FM, Cros ou ancrage osseux sont pris en charge pendant
                            2 ans selon l’âge ou la situation du patient.
                        </p>
                        <p>
                            Avec nos programmes, les audioprothésistes apportent une solution aux
                            utilisateurs afin de préserver leur investissement et assurer la continuité
                            de leur correction auditive indispensable.
                        </p>
                    </div>

                    <div className="col col--6">
                        <MediaImage
                            src="/img/Gemini_Generated_Image.jpg"
                            alt="Appareil auditif"
                            ratio="1:1"
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="h1">Nos chiffres clés audioprothèses</h1>
                    </div>
                    <FeatureGrid cols={3} className="margin-top--lg">
                        <FeatureGridItem>
                            <h3>+ 600 000 Appareils Assurés </h3>
                        </FeatureGridItem>
                        <FeatureGridItem>
                            <h3>+ 9 000 sinistres pris en charge / an</h3>
                        </FeatureGridItem>
                        <FeatureGridItem>
                            <h3>+ 3000 centres auditifs partenaires </h3>
                        </FeatureGridItem>
                    </FeatureGrid>
                </div>

                <FeatureGrid cols={2} className="margin-top--lg">
                    <FeatureGridItem>
                        <h1>Protection de votre activité</h1>
                        <h3>Nous sommes à vos cotés pour vous aider a protéger vos bien et votre équipe</h3>
                        <Link className="mkBtn mkBtn--primary" to="/contact">
                            Prendre RDV
                        </Link>
                    </FeatureGridItem>
                    <FeatureGridItem>
                        <MediaImage
                            src="/img/room_audio.png"
                            alt="Appareil auditif"
                            ratio="1:1" />
                    </FeatureGridItem>
                </FeatureGrid>
            </main>
        </Layout >
    );
}

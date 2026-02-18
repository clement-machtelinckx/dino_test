import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Icon from '@mdi/react';
import { MediaImage } from "../components/ui/MediaImage/MediaImage";
import { mdiSkull } from '@mdi/js';
import { Card } from "../components/ui/Card/Card";
import { Button } from "../components/ui/Button/Button";

export default function Solution(): ReactNode {
    return (
        <Layout title="Nos garanties">
            <main className="container margin-vert--lg">
                <div className="margin-bottom--lg">
                    <h1>Nos garanties</h1>
                    <p>
                        En proposant nos solutions, les audioprothésistes offrent à leurs
                        patients une tranquillité d’esprit. Des couvertures indispensables,
                        efficaces et totalement adaptées à la protection des appareillages.
                    </p>
                </div>
                <div className="row">


                    <div className="col col--4">
                        <Card title="GARANTIE PERTE"
                            topIcon={< Icon path={mdiSkull} />}
                        >

                            <p>
                                Cette couverture est pertinente pour des appareils de petite taille,
                                elle offre la possibilité de remplacer le dispositif égaré en l’absence
                                d’une participation des dispositifs des régimes obligatoires et mutuelles.*
                            </p>
                            <Button variant="primary" size="md">
                                Voir les détails
                            </Button>
                        </Card>
                    </div>

                    <div className="col col--4">
                        <Card title="GARANTIE VOL"
                            topIcon={< Icon path={mdiSkull} />}
                        >
                            <p>
                                La garantie vol protège l'assuré contre la soustraction frauduleuse de
                                son audioprothèse. Elle entre en jeu lorsque l'appareil est dérobé, que
                                ce soit par effraction, agression ou à l'insu de son propriétaire.*
                            </p>
                            <Button variant="primary" size="md">
                                Voir les détails
                            </Button>
                        </Card>
                    </div>

                    <div className="col col--4" >
                        <Card title="GARANTIE CASSE"
                            topIcon={< Icon path={mdiSkull} />}
                        >
                            <p>
                                La garantie casse couvre les dégâts matériels subis par l'audioprothèse
                                suite à un évènement soudain et imprévu. Cette protection assure la réparation
                                ou le remplacement de l'appareil endommagé, permettant ainsi à l'assuré de
                                retrouver rapidement l'usage de son dispositif auditif.*
                            </p>
                            <Button variant="primary" size="md">
                                Voir les détails
                            </Button>
                        </Card>
                    </div>
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
            </main>
        </Layout >
    );
}

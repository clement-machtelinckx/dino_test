import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { FeatureGrid, FeatureGridItem } from "../components/ui/FeatureGrid/FeatureGrid";
import { CardContact } from "../components/ui/CardContact/CardContact";

export default function Contact(): ReactNode {
    return (
        <Layout>
            <main className="container margin-vert--lg">
                <h1>Echangez avec Mark'assur</h1>
                <h3>Pour obtenir des informations sur nos solutions, réaliser un contrat, déclarer un sinistre</h3>

                <FeatureGrid cols={3}>
                    <FeatureGridItem>
                        <CardContact>
                            <p>
                                Contactez-nous par téléphone au <b>01 23 45 67 89</b> du lundi au vendredi de 9h à 18h.
                            </p>
                        </CardContact>

                    </FeatureGridItem>
                    <FeatureGridItem>

                        <p>
                            Envoyez-nous un email à <b>contact@markassur.fr</b>
                        </p>
                    </FeatureGridItem>

                </FeatureGrid>
            </main>
        </Layout >
    );
}
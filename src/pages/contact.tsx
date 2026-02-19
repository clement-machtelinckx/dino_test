import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { mdiPhoneOutline, mdiHeadset, mdiEmailOutline } from "@mdi/js";
import { CardContact } from "../components/ui/CardContact/CardContact";

import styles from "./contact.module.css";

export default function Contact(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title={`Contact | ${siteConfig.title}`}>
            <main className={styles.page}>
                <section className="mkSection">
                    <div className={clsx("container", styles.container)}>
                        <h1 className={clsx(styles.title, "mkTitleCenter")}>Échanger avec {siteConfig.title}</h1>

                        <p className={styles.subtitle}>
                            Pour obtenir des informations sur nos solutions, réaliser un contrat, déclarer un sinistre
                        </p>
                        <div className="">
                            <div className={styles.grid}>
                                <CardContact
                                    iconPath={mdiPhoneOutline}
                                    title="Contacter notre cabinet"
                                    href="tel:0320000000"
                                    buttonLabel="Appeler"
                                />
                                <CardContact
                                    iconPath={mdiHeadset}
                                    title="Être rappelé"
                                    href="/contact#etre-rappele"
                                    buttonLabel="Être rappelé"
                                />
                                <CardContact
                                    iconPath={mdiEmailOutline}
                                    title="Envoyer un e-mail"
                                    href="mailto:contact@markassur.fr"
                                    buttonLabel="Envoyer un e-mail"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

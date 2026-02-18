import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Test(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title} - Test`} description="Description will go into a meta tag in <head />">
            <main className="container margin-vert--lg">
                <h1>coucou</h1>
                <div>
                    <h2>formulaire</h2>
                    <form>
                        <label>
                            Nom :
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Envoyer" />
                    </form>
                </div>
            </main>
        </Layout>
    );
}
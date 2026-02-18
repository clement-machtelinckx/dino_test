import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { MediaImage } from '../components/ui/MediaImage/MediaImage';

import Heading from '@theme/Heading';

import styles from './index.module.css';



export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main className="container margin-vert--lg">
        <MediaImage
          src="/img/Medium-Logo-transparent--768x356.png"
          alt="Logo de Markassur"
          ratio="1:1"
        />
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <Link to="/solution">Découvrir nos solutions</Link>
      </main>
    </Layout>
  );
}

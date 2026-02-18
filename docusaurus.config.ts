import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Boilerplate',
  tagline: 'Boilerplate pour site vitrine',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'clement-machtelinckx',
  projectName: 'dino_test',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',              // dossier
          routeBasePath: 'docs',     // URL
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/clement-machtelinckx/dino_test',
        },
        blog: {
          path: 'blog',           // dossier
          routeBasePath: 'blog',  // URL
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/clement-machtelinckx/dino_test',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['fr'],
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
      },
    ],
  ],

  themeConfig: {
    image: undefined,
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Boilerplate',
      logo: {
        alt: 'Boilerplate',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/solution', label: 'Solution', position: 'left' },
        { to: '/partenaire', label: 'Partenaire', position: 'left' },
        { href: 'https://lapigroupe.fr/courtiers-lapi-groupe/', label: 'Réseau', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'left' },
        { to: '/opportunities-test', label: 'Test', position: 'left' },
        { to: '/docs', label: 'docs', position: 'left' },
        { to: '/blog', label: 'Blogs', position: 'left' },
        { type: 'search', position: 'right' },
        {
          href: 'https://github.com/clement-machtelinckx/dino_test',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: "Cabinet Mark'assur",
          items: [
            { label: "Mentions légales et médiateur", to: '/legal/mentions-legales' },
            { label: "Politique cookie", to: '/legal/politique-cookie' },
            { label: "Politique de confidentialité", to: '/legal/politique-de-confidentialite' },
          ]
        },
        {
          title: 'Contact',
          items: [
            { label: 'TEL Service gestion', to: 'tel:0320000000' },
            { label: 'TEL service Commercial', to: 'tel:0320000001' },
            { label: 'Mail DU CABINET', to: 'mailto:contact@markassur.fr' }
          ],
        },
        {
          title: 'Menu',
          items: [
            { label: 'Acceuil', to: '/' },
            { label: 'Solution', to: '/solution' },
            { label: 'devenir partenaire', to: '/partenaire' },
            { label: 'notre résseau', to: '/reseau' },
            { label: 'contact', to: '/contact' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Boilerplate.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

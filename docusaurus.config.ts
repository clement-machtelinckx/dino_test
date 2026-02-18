import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Boilerplate',
  tagline: 'Règles & Lore + Résumés de sessions',
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
          title: 'Contenu',
          items: [
            { label: 'Règles & Lore', to: '/docs' },
            { label: 'Blogs', to: '/blog' },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/clement-machtelinckx/dino_test',
            },
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

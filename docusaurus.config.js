module.exports = {
  title: 'Bioindustries Webstore Docs',
  tagline: 'Dokumentasi Developer Webstore',
  url: 'https://bioindustries-docs.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bioindustries', // GitHub org/user name
  projectName: 'docs', // Repo name
  themeConfig: {
    navbar: {
      title: 'Bioindustries Docs',
      items: [
        {to: '/docs/intro', label: 'Dokumentasi', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Bioindustries.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

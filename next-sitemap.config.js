/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jortiz.dev',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.8,
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

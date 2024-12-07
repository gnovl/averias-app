/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_WEBSITE_URL || "https://averiashogar.es",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*", "/static/*"],
      },
    ],
    additionalSitemaps: [
      `${
        process.env.NEXT_WEBSITE_URL || "https://averiashogar.es"
      }/sitemap.xml`,
      `${
        process.env.NEXT_WEBSITE_URL || "https://averiashogar.es"
      }/server-sitemap.xml`,
    ],
  },
  // Generate a sitemap for static pages
  generateIndexSitemap: true,
  // Additional URLs to include in the static sitemap
  additionalPaths: async (config) => {
    const result = [
      { loc: "/", changefreq: "daily", priority: 1.0 },
      { loc: "/blog", changefreq: "daily", priority: 0.8 },
      // Add other static pages here
    ];
    return result;
  },
};

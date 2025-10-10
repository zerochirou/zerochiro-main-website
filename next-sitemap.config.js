/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zerochiro.netlify.app",
  generateRobotsTxt: true, // otomatis bikin robots.txt
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/secret-page/*"], // halaman yang tidak ingin di-index
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // { userAgent: "*", disallow: "/private" }, contoh larang halaman
    ],
  },
};

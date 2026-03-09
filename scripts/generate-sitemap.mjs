import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { products } from '../src/data/products.js';
import { blogPosts } from '../src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || 'https://example.com';

const staticRoutes = [
  '/',
  '/shoes',
  '/blog',
  '/nike-shoes',
  '/adidas-shoes',
  '/puma-shoes',
  '/sell-your-shoes',
  '/about',
  '/contact'
];

const productRoutes = products.map((product) => `/product/${product.slug}`);
const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

const allRoutes = [...staticRoutes, ...productRoutes, ...blogRoutes];

const today = new Date().toISOString().split('T')[0];

const urlSet = allRoutes
  .map((route) => {
    return `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>`;
  })
  .join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet}
</urlset>
`;

const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const sitemapPath = path.join(distDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap.trim() + '\n', 'utf8');

console.log(`Sitemap generated at ${sitemapPath}`);


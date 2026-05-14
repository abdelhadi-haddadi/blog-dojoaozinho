import { MetadataRoute } from 'next';

const SITE_URL = 'https://blog-dojoaozinho.vercel.app'; // ← update to your real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import type { MetadataRoute } from 'next';
import { navLinks } from '@/lib/constants';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const paths = navLinks
        .map((link) => link.href)
        .filter((href) => href.startsWith('/') && !href.startsWith('/#'));

    return ['/', ...new Set(paths)].map((path) => ({
        url: `${siteUrl}${path === '/' ? '' : path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '/' ? 1 : 0.7,
    }));
}
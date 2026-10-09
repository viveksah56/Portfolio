import type { MetadataRoute } from 'next';
import { seoData } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: seoData.siteUrl,
            lastModified: seoData.lastUpdated,
            changeFrequency: 'monthly',
            priority: 1,
            images: [`${seoData.siteUrl}${seoData.socialCard.url}`],
        },
    ];
}
import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/case-studies';
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
        ...caseStudies.map((study) => ({
            url: `${seoData.siteUrl}/projects/${study.slug}`,
            lastModified: seoData.lastUpdated,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ];
}

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';
import { seoData } from '@/lib/seo';
import { DEFAULT_THEME, THEME_COLORS } from '@/lib/themes';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${siteConfig.name} | ${siteConfig.role}`,
        short_name: siteConfig.name,
        description: seoData.description,
        start_url: '/',
        display: 'standalone',
        background_color: THEME_COLORS[DEFAULT_THEME],
        theme_color: THEME_COLORS[DEFAULT_THEME],
        icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
    };
}
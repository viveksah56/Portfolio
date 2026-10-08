import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme/theme-provider';
import ScrollProgress from '@/components/scroll-progress';
import { siteConfig } from '@/lib/constants';
import { DEFAULT_THEME, THEME_COLORS, THEME_STORAGE_KEY } from '@/lib/themes';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bibeksah.com').replace(/\/$/, '');
const siteTitle = `${siteConfig.name} | ${siteConfig.role}`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: { default: siteTitle, template: `%s | ${siteConfig.name}` },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        url: siteUrl,
        siteName: siteConfig.name,
        title: siteTitle,
        description: siteConfig.description,
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteConfig.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: THEME_COLORS[DEFAULT_THEME],
};

const themeScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});var v=${JSON.stringify(
    Object.keys(THEME_COLORS),
)};document.documentElement.dataset.theme=v.indexOf(t)>-1?t:${JSON.stringify(DEFAULT_THEME)}}catch(e){}})();`;

const personJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteUrl,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
}).replace(/</g, '\\u003c');

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" data-theme={DEFAULT_THEME} suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
        </head>
        <body className="min-h-svh">
        <ThemeProvider>
            <ScrollProgress />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
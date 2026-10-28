import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import JsonLd from '@/components/json-ld';
import ScrollProgress from '@/components/scroll-progress';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { siteConfig } from '@/lib/constants';
import { seoData } from '@/lib/seo';
import { structuredData } from '@/lib/structured-data';
import { DEFAULT_THEME, THEME_COLORS, THEME_STORAGE_KEY } from '@/lib/themes';
import './globals.css';

const { siteUrl, title, description, locale, socialCard } = seoData;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const hasGtm = !!GTM_ID && /^GTM-[A-Z0-9]+$/.test(GTM_ID);

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description,
    keywords: [...seoData.keywords],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: 'technology',
    alternates: { canonical: '/', languages: { 'en-US': '/', 'x-default': '/' } },
    openGraph: {
        type: 'website',
        url: siteUrl,
        siteName: siteConfig.name,
        title,
        description,
        locale,
        images: [{ url: socialCard.url, width: socialCard.width, height: socialCard.height, alt: socialCard.alt }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [{ url: socialCard.url, alt: socialCard.alt }],
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
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        other: process.env.NEXT_PUBLIC_BING_VERIFICATION
            ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }
            : undefined,
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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html
            lang="en"
            data-theme={DEFAULT_THEME}
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
        <head>
            <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            <JsonLd data={structuredData} />
        </head>
        <body className="min-h-svh">
        <a
            href="#main"
            className="sr-only fixed left-4 top-4 z-100 rounded-full bg-primary px-5 py-2.5 text-[15px] font-medium text-primary-foreground focus:not-sr-only focus-visible:ring-2 focus-visible:ring-ring"
        >
            Skip to content
        </a>
        <ThemeProvider>
            <ScrollProgress />
            {children}
        </ThemeProvider>
        {GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID) && <GoogleAnalytics gaId={GA_ID} />}
        {hasGtm && GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}

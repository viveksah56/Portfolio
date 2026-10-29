import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import JsonLd from '@/components/json-ld';
import ScrollProgress from '@/components/scroll-progress';
import { SplashProvider } from '@/components/splash/splash-provider';
import ThemeDock from '@/components/theme/theme-dock';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { siteConfig } from '@/lib/constants';
import { fontVariables } from '@/lib/fonts';
import { seoData } from '@/lib/seo';
import { splashInitScript } from '@/lib/splash';
import { structuredData } from '@/lib/structured-data';
import { DEFAULT_THEME, THEME_COLORS, themeInitScript } from '@/lib/themes';
import './globals.css';
import '@/styles/splash.css';

const { siteUrl, title, description, locale, socialCard } = seoData;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const gaId = GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID) ? GA_ID : null;
const gtmId = GTM_ID && /^GTM-[A-Z0-9]+$/.test(GTM_ID) ? GTM_ID : null;

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
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
        other: process.env.NEXT_PUBLIC_BING_VERIFICATION
            ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }
            : undefined,
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: siteConfig.name,
    },
    formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: THEME_COLORS[DEFAULT_THEME],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html
            lang="en"
            data-theme={DEFAULT_THEME}
            data-scroll-behavior="smooth"
            className={fontVariables}
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript + splashInitScript }} />
                <noscript>
                    <style>{'.splash-root{display:none}'}</style>
                </noscript>
                <JsonLd data={structuredData} />
            </head>
            <body className="min-h-svh pb-16">
                <a
                    href="#main"
                    className="sr-only fixed left-4 top-4 z-120 rounded-full bg-primary px-5 py-2.5 text-[15px] font-medium text-primary-foreground focus:not-sr-only focus-visible:ring-2 focus-visible:ring-ring"
                >
                    Skip to content
                </a>
                <ThemeProvider>
                    <SplashProvider>
                        <ScrollProgress />
                        {children}
                        <ThemeDock />
                    </SplashProvider>
                </ThemeProvider>
                {gaId && <GoogleAnalytics gaId={gaId} />}
                {gtmId && <GoogleTagManager gtmId={gtmId} />}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
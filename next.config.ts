import type {NextConfig} from "next";

const nextConfig: NextConfig = {

    experimental: {
        agentFeedback: true,
    },
    cacheComponents: true,
    partialPrefetching: true,
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
    async redirects() {
        const canonicalOrigin = 'https://www.bibeksah1.com.np';
        return ['bibeksah.com', 'www.bibeksah.com', 'bibeksah1.com.np'].map((host) => ({
            source: '/:path*',
            has: [{type: 'host' as const, value: host}],
            destination: `${canonicalOrigin}/:path*`,
            permanent: true,
        }));
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {key: 'X-Content-Type-Options', value: 'nosniff'},
                    {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
                    {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
                    {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
                    {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'},
                ],
            },
            {
                source: '/social-card.png',
                headers: [{key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800'}],
            },
        ];
    },
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;

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
    htmlLimitedBots: /.*/,
    images: {
        formats: ['image/avif', 'image/webp'],
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rosebourneplumbing.co.uk',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'ui-avatars.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'maps.googleapis.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'maps.gstatic.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'streetviewpixels-pa.googleapis.com',
                pathname: '**',
            },
        ],
    },
    // Add webpack configuration to handle Node.js modules and optimize performance
    webpack: (config, { isServer, dev }) => {
        if (!isServer) {
            // Don't resolve 'fs' module on the client to prevent this error
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
                crypto: false,
                stream: false,
                http: false,
                https: false,
                zlib: false,
            };
        }

        // Increase chunk loading timeout
        if (dev) {
            config.watchOptions = {
                ...config.watchOptions,
                aggregateTimeout: 300,
                poll: 1000,
            };
        }

        return config;
    },
    // Increase the timeout for static generation
    staticPageGenerationTimeout: 180,
    // Optimize performance
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig

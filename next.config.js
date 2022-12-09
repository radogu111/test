/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'image.tmdb.org'
            }
        ]
    }
}

module.exports = nextConfig

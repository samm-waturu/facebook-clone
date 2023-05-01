/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains:
            [
                'links.papareact.com',
                'platform-lookaside.fbsbx.com',
                'lh3.googleusercontent.com',
                'cdna.artstation.com',
                'firebasestorage.googleapis.com'

            ]
    }
}

module.exports = nextConfig

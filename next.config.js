/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'img.youtube.com', 'source.unsplash.com', 'yt3.ggpht.com', 'www.youtube.com']
  }
}

module.exports = nextConfig

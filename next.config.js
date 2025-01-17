/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      "upcdn.io", 
      "replicate.delivery", 
      "lh3.googleusercontent.com",
      "i.postimg.cc",
      "s3-alpha-sig.figma.com"
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  swcMinify: false // Disable SWC minification
};
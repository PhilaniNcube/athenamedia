/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // Add the following line to your next.config.js file
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      }
    ]
  }
};

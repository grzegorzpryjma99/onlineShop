/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const handler = (req, res) => {
  res.setHeader('Content-Security-Policy', "connect-src 'self' vitals.vercel-insights.com");
};

module.exports = handler;
module.exports = nextConfig

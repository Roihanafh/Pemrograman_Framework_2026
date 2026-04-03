const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   turbopack: {
    // atur root ke folder ini agar Turbopack tidak menebak
    root: path.resolve(__dirname)
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
}

module.exports = nextConfig

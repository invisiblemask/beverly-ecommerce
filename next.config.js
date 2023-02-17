/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')]
  }
}

module.exports = nextConfig

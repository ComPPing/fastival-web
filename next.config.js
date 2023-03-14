/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  dest: 'public',
})

module.exports = nextConfig
